<template>
  <div>
    <header class="flex justify-evenly items-center bg-green-50">
      <div class="right">
        <img src="~assets/images/logo.png" alt="Logo" width="85px">
      </div>
      <div class="left">
        <ul class="flex list-none text-lg gap-5">
          <li><NuxtLink active-class="root" to="/">Home</NuxtLink></li>
          <li><NuxtLink active-class="root" to="/login">Login</NuxtLink></li>
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