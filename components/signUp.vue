<template>
  <div class="fixed right-4 transition-[top] duration-300" :class="{ '-top-11': menuOpen }, { 'top-3': !menuOpen }">
    <button @click="menuOpen = true"
      class="p-1 border-2 border-theme-blue rounded-full  flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
      <img src="../assets/images/icons/icon-menu.svg" class="w-8 h-8">
    </button>

  </div>

  <div v-if="menuOpen" class="z-10">
    <div @click="menuOpen = false" class="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-30"></div>

    <div class="fixed top-[2.5rem] right-[2rem] w-[20rem] bg-white flex flex-col gap-y-4 pt-7 pb-10 rounded-md">

      <div v-if="loggedIn" class="flex flex-row justify-start items-center">
        <div>
          <div class="bg-grayish-blue text-white w-16 h-16 mx-5 rounded-full flex justify-center items-center">
            img
          </div>
        </div>
        <div>
          <div><span class="font-bold">Username: </span>{{ user.displayName }}</div>
          <div><span class="font-bold">Created On: </span>date_here</div>
        </div>
      </div>

      <div v-if="loggedIn" class="flex flex-col gap-y-4 items-center mt-4">
        <button @click="logOutUser()" class="red-button">
          Log Out
        </button>
        <button class="red-button">
          Delete Account
        </button>
      </div>

      <form @submit.prevent="signInUser()" v-if="!loggedIn" class="flex flex-col gap-y-5 items-center">
        <input type="text" placeholder="Username or Email" v-model="logInUserEmail" class="input p-2">
        <input type="password" placeholder="Password" v-model="logInUserPassword" class="input p-2">

        <button class="bg-theme-blue p-2 text-white rounded-md">
          Log In
        </button>
      </form>

      <div v-if="!loggedIn" class="flex justify-center text-lg my-5">or</div>

      <form @submit.prevent="signUpUser()" v-if="!loggedIn" class="flex flex-col gap-y-5 items-center">
        <input type="text" placeholder="Username" v-model="signUpUsername" class="input p-2">
        <input type="text" placeholder="Email" v-model="signUpEmail" class="input p-2">
        <input type="password" placeholder="Password" v-model="signUpPassword" class="input p-2">

        <button class="bg-theme-blue p-2 text-white rounded-md">
          Sign Up
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
const menuOpen = ref(true)
const user = auth.currentUser;

const loggedIn = ref(false)
watchEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedIn.value = true
    } else {
      loggedIn.value = false
    }
  });
})

// Sign Up or Log In
const signUpUsername = ref('John')
const signUpEmail = ref('mail@mail.com')
const signUpPassword = ref('password1234')
function signUpUser() {
  createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
    .then((userCred) => {
      const user = userCred.user;

      updateProfile(auth.currentUser, {
        displayName: signUpUsername.value
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode)
        console.error(errorMessage)
      });

      console.log('Signed In', user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode)
      console.error(errorMessage)
    });
}

const logInUserEmail = ref('mail@mail.com')
const logInUserPassword = ref('password1234')
function signInUser() {
  signInWithEmailAndPassword(auth, logInUserEmail.value, logInUserPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log('Signed In', user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode)
      console.error(errorMessage)
    });
}

// Log out or Delete Account
function logOutUser() {
  signOut(auth).then(() => {
    console.log('User Signed Out')
    menuOpen.value = false
    // location.reload()
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}



</script>

<style></style>