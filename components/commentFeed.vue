<template>
  <div class="flex flex-col gap-y-10 justify-center pb-20 pt-8 px-12">

    <div v-for="post in posts" :key="post.timestamp" class="flex flex-col gap-y-6 min-w-[30rem] max-w-[45rem]">
      <div class="w-full p-5 bg-white rounded-lg flex shadow-md">
        <div class="h-20 mr-4 px-2 flex flex-col justify-between items-center bg-background-gray rounded-lg">
          <div class="light-blue-text">+</div>
          <div class="blue-text">{{ post.votes }}</div>
          <div class="light-blue-text">-</div>
        </div>
        <div class="w-full">
          <div class="flex justify-between py-2">
            <div class="flex items-center gap-x-4">
              <div>
                <div class="bg-grayish-blue text-white w-7 h-7 rounded-full flex justify-center items-center text-xs">img
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

              <div class="text-grayish-blue">{{ reply.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script setup>

import posts from '../data/posts.json'




</script>



<style></style>
