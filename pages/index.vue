<template>
  <Head>
    <Title>Home Page</Title>
  </Head>
  <div>
    <div class="title">
      <h1 class="text-blue-600 cursor-default hover:text-green-400 text-center text-2xl mt-5">Welcome to ToDo App</h1> 
    </div>
  </div>
  <div class="flex justify-evenly gap-6 mt-10">
    <div class="text-center bg-slate-300 hover:bg-slate-200 p-5 rounded-md">
      <h2 class="text-lg mb-3">Login and use App</h2>
      <button class="bg-green-600 text-gray-50 px-5 py-2 rounded-lg text-2xl hover:bg-green-700"><NuxtLink active-class="root" to="/login">Login Now </NuxtLink></button>
    </div>
    <div class="text-center bg-slate-300 hover:bg-slate-200 p-5 rounded-md">
      <h2 class="text-lg mb-3">Get Started For Free</h2>
      <button class="bg-green-600 text-gray-50 px-5 py-2 rounded-lg text-2xl hover:bg-green-700"><NuxtLink active-class="root" to="/app">Go App</NuxtLink></button>
    </div>
  </div>

  <div class="text-center mt-12 text-xl">
    <h3 class="text-lime-500">Matin Soleymani </h3>
    <h3> Zmat24 </h3>
  </div>
</template> 