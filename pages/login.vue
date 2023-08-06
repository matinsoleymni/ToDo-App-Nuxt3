<template>
  <Head>
    <Title>Login Page</Title>
  </Head>
  <div class="flex w-full items-center flex-col justify-center" :class="{'hidden': isLogin}">
    <div class="titles">
      <h2 class="text-rose-400 text-2xl mt-8">Login</h2>
    </div>

    <div  class="flex flex-col mt-8 justify-center w-4/12 gap-5 max-md:w-10/12">
      <input class="p-4 rounded-lg text-xl border-2 border-solid border-rose-400" v-model="username2" type="text" placeholder="Username" required>
      <input class="p-4 rounded-lg text-xl border-2 border-solid border-rose-400" v-model="pass2" type="password" placeholder="password" required>
      <button class="bg-transparent text-green-400 rounded-md cursor-pointer text-lg relative p-2" @click="sendDataLogin()">Submit</button>
      <p class=" text-md text-blue-500 cursor-pointer hover:text-green-600"><NuxtLink to="/register">Create Account !</NuxtLink></p>
    </div>
  </div>

  <div class="flex justify-center">
    <div hidden class="w-7/12 flex-col items-center mt-10 justify-center rounded-lg bg-green-300 text-gray-700" :class="{'flex': isLogin}">
      <p class="text-2xl mt-2">Name: <span class="text-3xl text-rose-800">{{name}}</span></p>
      <p class="bg-blue-500 cursor-pointer px-5 rounded-lg py-1 mt-5 text-gray-50"><NuxtLink to="/app">Go To App</NuxtLink></p>
      <p @click="logout()" class="bg-red-500 cursor-pointer px-5 rounded-lg py-1 my-5 text-gray-50">LogOut</p>
      </div>
  </div>
</template>

<script setup>

/* models */
let username2 = ""
let pass2 = ""
let isLogin = false
let name = ""
const router = useRouter()

  /* send data to api for login user */
  function sendDataLogin(){
    const dates = {
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
    if(r.info.status_code == "200"){
      alert("Login was successfully")
      localStorage.setItem('userid', r.data.id);
      localStorage.setItem('username', r.data.name);
      router.push({name: "app"})
    }else {
      alert("Not Found User")
      localStorage.removeItem('userid');
    }

  }

  onMounted(()=> {
    if(localStorage.getItem('userid')){
      isLogin=true
      name = localStorage.getItem("username")
    }
  })

  function logout(){
    localStorage.removeItem("userid")
    localStorage.removeItem("username")
    router.push({name : "index"})
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
