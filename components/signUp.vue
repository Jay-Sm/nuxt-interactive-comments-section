<template>
  <div class="fixed top-3 right-4 transition-[top] duration-300" :class="{ '-top-11': menuOpen }">
    <button @click="menuOpen = true"
      class="p-1 border-2 border-theme-blue rounded-full  flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
      <img src="../assets/images/icons/icon-menu.svg" class="w-8 h-8">
    </button>

  </div>

  <div v-if="menuOpen" class="z-10">
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-30"></div>

    <div class="fixed top-[2.5rem] h-[40rem] right-[2rem] w-[20rem] bg-white flex flex-col rounded-md transition-[right] duration-1000" :class="{ '-right-11': !menuOpen }">
      <button @click="menuOpen = false" class="mt-4 pr-5 flex justify-end">
        <img src="../assets/images/icons/icon-x_mark.svg" class="w-8 h-8">
      </button>



    </div>
  </div>
</template>

<script setup>
const menuOpen = ref(false)

</script>

<style></style>