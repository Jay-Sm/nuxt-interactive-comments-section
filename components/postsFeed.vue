<template>
  <div class="w-full flex flex-col gap-y-10 items-center pb-20 px-[4.8rem] pt-8 js-feed">
    <div v-for="post in posts" :key="post.timestamp" class="flex flex-col gap-y-6 min-w-[30rem] w-full max-w-[60rem]">
      <div class="w-full p-5 bg-white rounded-lg flex shadow-md">
        <div class="h-20 mr-4 px-2 flex flex-col justify-between items-center bg-background-gray rounded-lg">
          <button @click="addVote(true, post.post_id)" class="light-blue-text">+</button>
          <div class="blue-text">{{ post.votes }}</div>
          <button @click="addVote(false, post.post_id)" class="light-blue-text">-</button>
        </div>
        <div class="w-full">
          <div class="flex justify-between py-2">
            <div class="flex items-center gap-x-4">
              <div>
                <div class="w-7 h-7 flex justify-center items-center text-xs">
                  <img :src="post.profile_img" class="js-profile-img w-full h-full rounded-full">
                </div>
              </div>
              <p class="font-medium text-dark-blue">{{ post.username }}</p>
              <p class="text-grayish-blue">{{ epochConversion(post.timestamp.seconds) }}</p>
            </div>

            <div class="flex items-center gap-x-2 cursor-pointer">
              <img src="../assets/images/icons/icon-reply.svg" class="max-w-[14px] max-h-[13px]">
              <p class="blue-text">Reply</p>
            </div>
          </div>

          <div class="text-grayish-blue">{{ post.content }}</div>
        </div>
      </div>

      <div v-if="post.replies.length" class="flex w-full">
        <div class="w-[5px] mx-9 bg-very-light-gray"></div>
        <div class="flex flex-col gap-y-6">
          <div v-for="reply in post.replies" :key="reply.timestamp" class="w-full p-5 bg-white rounded-lg flex shadow-md">
            <div class="h-20 mr-4 px-2 flex flex-col justify-between bg-background-gray rounded-lg">
              <div class="light-blue-text">+</div>
              <div class="blue-text">{{ reply.votes }}</div>
              <div class="light-blue-text">-</div>
            </div>
            <div class="w-full">
              <div class="flex justify-between py-2">
                <div class="flex items-center gap-x-4">
                  <div>
                    <div class="bg-grayish-blue text-white w-7 h-7 rounded-full flex justify-center items-center text-xs">
                      img
                    </div>
                  </div>
                  <p class="font-medium text-dark-blue">John Doe</p>
                  <p class="text-grayish-blue select-none">0 Seconds Ago</p>
                </div>

                <div class="flex items-center gap-x-2 cursor-pointer">
                  <img src="../assets/images/icons/icon-reply.svg" class="max-w-[14px] max-h-[13px]">
                  <p class="blue-text">Reply</p>
                </div>
              </div>

              <div class="text-grayish-blue">{{ reply.content }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { epochConversion } from '~/composables/epochConversion';
import { addVote } from '~/composables/addVote';
import { db, storage } from '~/firebase/'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
const postsRef = collection(db, "posts")


const posts = ref([])

const q = query((postsRef), orderBy("timestamp", "desc"))
onSnapshot(q, (querySnapshot) => {
  posts.value = []

  querySnapshot.forEach(post => {
    const userProfileImagePathRef = storageRef(storage, post.data().profile_img);
    const postProfilePath = ref('')

    getDownloadURL(userProfileImagePathRef)
      .then((url) => {
        postProfilePath.value = url
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode)
        console.error(errorMessage)
      });

    const newPost = {
      owner: post.data().owner,
      post_id: post.id,
      votes: post.data().votes,
      username: post.data().username,
      profile_img: postProfilePath,
      timestamp: post.data().timestamp,
      content: post.data().content,
      replies: []
    }
    posts.value.push(newPost)
    // console.log(newPost.post_id)
  });
});
</script>



<style></style>
