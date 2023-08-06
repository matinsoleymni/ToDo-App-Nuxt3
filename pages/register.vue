<template>
  <Head>
    <Title>Register Page</Title>
  </Head>
  <div class="flex w-full items-center flex-col justify-center">
    <div class="titles">
      <h2 class="text-rose-400 text-2xl mt-8">Register</h2>
    </div>

    <div  class="flex flex-col mt-8 justify-center w-4/12 gap-5 max-md:w-10/12">
      <input class="p-4 rounded-lg text-xl border-2 border-solid border-rose-400" v-model="name2" type="text" placeholder="Name" required>
      <input class="p-4 rounded-lg text-xl border-2 border-solid border-rose-400" v-model="username2" type="text" placeholder="Username" required>
      <input class="p-4 rounded-lg text-xl border-2 border-solid border-rose-400" v-model="email2" type="email" placeholder="Email" required>
      <input class="p-4 rounded-lg text-xl border-2 border-solid border-rose-400" v-model="pass2" type="password" placeholder="password" required>
      <button class="bg-transparent text-green-400 rounded-md cursor-pointer text-lg relative p-2" @click="sendDataLogin()">Submit</button>
      <p class="text-md text-blue-500 cursor-pointer hover:text-green-600"><NuxtLink to="/login">Are You Have a account?</NuxtLink></p>
    </div>
  </div>
</template>

<script setup>

/* models */
let name2 = ""
let username2 = ""
let email2 = ""
let pass2 = ""
const router = useRoute()

  /* send data to api for login user */
  function sendDataLogin(){
    const dates = {
      name: name2,
      email: email2,
      username: username2,
      password: pass2
    }
    const send = $fetch('https://blokchainology.com/api/api/v1/users/?token=adminadmin' , {
      method: "POST",
      body: JSON.stringify(dates)
    });

    send.then(res => validator(res));
  }

  /* validate login and show message */
  function validator(r){
    if(r.info.status_code == "201"){
      alert("register was successfully")
      localStorage.setItem('userid', r.data.id);
      localStorage.setItem('username', r.data.name);
      router.push({name: "app"})
    }else {
      alert("ERROR")
    }

  }
</script>

<style scoped>

  button {
    transition: all 0.5s;
    z-index: 1;
  }

  button::before {
    content: "";
    height: 100%;
    width: 0%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: green;
    z-index: -1;
    border-radius: 20px;
    transition: all 0.5s;

  }

  button:hover::before {
    content: "";
    transition: all 0.5s;
    width: 100%;

  }
</style>
