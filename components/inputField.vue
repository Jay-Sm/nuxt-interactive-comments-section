<template>
  <div
    class="h-[10.6rem] fixed left-0 right-0 flex flex-col justify-center items-center transition-[bottom] duration-[300ms] px-10"
    :class="{ 'bottom-3': active }, { '-bottom-[8.5rem]': !active }">
    <button @click="active = !active"
      class="-mb-6 bg-theme-blue min-w-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem] rounded-full flex items-center justify-center box-border relative z-10 disabled:bg-grayish-blue disabled:cursor-not-allowed"
      :disabled=!loggedIn>
      <img src="../assets/images/icons/up-icon.svg" class="w-[2rem] transition-[all] duration-[500ms]"
        :class="{ '-rotate-180': active }">
    </button>

    <div class="max-w-[50rem] min-w-[35rem] w-full h-[85%] p-5 bg-white rounded-lg flex gap-x-4">
      <div>
        <div class="w-10 h-10 flex justify-center items-center text-xs">
          <img :src="profileFilePath" class="js-profile-img w-full h-full rounded-full">
        </div>
      </div>
      <div class="relative w-full">
        <textarea name="" placeholder="Add a comment..." class="w-full h-full input resize-none pt-1 pl-3"
          v-model="newPost"></textarea>
      </div>
      <div class="flex items-center">
        <button @click="addPost()"
          class="font-medium text-white bg-theme-blue rounded-md py-3 px-8 hover:opacity-80 active:opacity-50 transition-opacity">SEND</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { db, auth, storage } from '~/firebase/'
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"
import { ref as storageRef, getDownloadURL } from "firebase/storage";
const postsRef = collection(db, "posts")

const active = ref(false)
const newPost = ref('Test Lorem')


const loggedIn = ref(false)
watchEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedIn.value = true
    } else {
      loggedIn.value = false
      active.value = false
    }
  });
})

const profileFilePath = ref(``)
onAuthStateChanged(auth, (user) => {
  const userProfileImagePathRef = storageRef(storage, user.photoURL);

  getDownloadURL(userProfileImagePathRef)
    .then((url) => {
      profileFilePath.value = url
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode)
      console.error(errorMessage)
    });
})

// Posting
function addPost() {
  const user = auth.currentUser;

  addDoc(postsRef, {
    owner: user.uid,
    votes: 0,
    username: user.displayName,
    profile_img: user.photoURL,
    timestamp: new Date(),
    content: newPost.value,
    replies: []
  });
  newPost.value = ""
}

watchEffect(() => {
  if (newPost.value.length > 800) {
    newPost.value = newPost.value.substring(0, 800);
  }
})
</script>



<style></style>
