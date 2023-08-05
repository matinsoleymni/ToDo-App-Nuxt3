<template>
  <Head>
    <Title>Login Page</Title>
  </Head>
  <div class="main">
    <div class="titles">
      <h2>Login</h2>
    </div>

    <div  class="inps">
      <input v-model="name2" type="text" placeholder="Name" required>
      <input v-model="username2" type="text" placeholder="Username" required>
      <input v-model="email2" type="email" placeholder="Email" required>
      <input v-model="pass2" type="password" placeholder="password" required>
      <button @click="sendDataLogin()">Submit</button>

    </div>
  </div>
</template>

<script setup>

/* models */
let name2 = ""
let username2 = ""
let email2 = ""
let pass2 = ""

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
      alert("Login was successfully")
      localStorage.setItem('userid', r.data.id);
      route.push("/app") // have error
    }

  }
</script>

<style scoped>
  .main {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .inps {
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  .inps input {
    padding: 15px;
    border-radius: 5px;
    font-size: 20px;
  }

  .inps button {
    background-color: transparent;
    color: rgb(166, 255, 149);
    border-radius: 25px;
    padding: 15px;
    cursor: pointer;
    font-size:  20px;
    position: relative;
    transition: all 0.5s;
    z-index: 1;
  }

  .inps button::before {
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

  .inps button:hover::before {
    content: "";
    transition: all 0.5s;
    width: 100%;

  }
</style>
