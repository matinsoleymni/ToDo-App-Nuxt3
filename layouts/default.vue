<template>
  <div>
    <header class="flex justify-evenly items-center bg-green-50">
      <div class="right">
        <img src="~assets/images/logo.png" alt="Logo" class="w-20 max-md:w-16">
      </div>
      <div class="left">
        <ul class="flex list-none text-lg gap-5">
          <li><NuxtLink active-class="root" to="/">Home</NuxtLink></li>
          <li><NuxtLink active-class="root" to="/login">{{username}}</NuxtLink></li>
          <li><NuxtLink active-class="root" to="/app">App</NuxtLink></li>
        </ul>
      </div>
    </header>

    <slot />

    <footer class="flex mt-5 bg-purple-500 bottom-0 w-full absolute text-gray-50 justify-center rounded-md text-2xl">
      <p>24</p>
    </footer>
  </div>
</template>

<script setup>
let username = "Login"
if(localStorage.getItem("username")){
  username = localStorage.getItem("username")
}else {

}
</script>