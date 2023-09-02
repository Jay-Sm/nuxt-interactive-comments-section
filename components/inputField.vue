<template>
  <div class="h-[10.6rem] fixed left-0 right-0 flex flex-col justify-center items-center transition-[bottom] duration-[300ms]"
    :class="{ 'bottom-3': active }, { '-bottom-[8.5rem]': !active }">
    <button @click="active = !active"
      class="-mb-6 bg-theme-blue min-w-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem] rounded-full flex items-center justify-center box-border relative z-10">
      <img src="../assets/images/icons/up-icon.svg" class="w-[2rem] transition-[all] duration-[500ms]" :class="{ 'rotate-180': active }">
    </button>

    <div class="max-w-[50rem] min-w-[35rem] w-[50rem] mx-8 h-[85%] p-5 bg-white rounded-lg flex gap-x-4">
      <div>
        <div class="bg-grayish-blue text-white w-10 h-10 rounded-full flex justify-center items-center text-xs">
          img
        </div>
      </div>
      <div class="relative w-full">
        <textarea name="" placeholder="Add a comment..."
          class="w-full h-full border-2 border-very-light-gray rounded-md resize-none placeholder:text-[#aab0ba] pt-1 pl-3"></textarea>
      </div>
      <div class="flex items-center">
        <button
          class="font-medium text-white bg-theme-blue rounded-md py-3 px-8 hover:opacity-80 active:opacity-50 transition-opacity">SEND</button>
      </div>
    </div>
  </div>
</template>

<script setup>

const active = ref(false)

</script>



<style></style>
