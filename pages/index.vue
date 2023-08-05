<template>
  <Head>
    <Title>Home Page</Title>
  </Head>
  <div>
    <div class="title">
      <h1>Get Started :)</h1> 
    </div>
  </div>
  <div class="main">
    <div class="login">
      <h2>Login and use App</h2>
      <button><NuxtLink active-class="root" to="/login">Login Now </NuxtLink></button>
    </div>
    <div class="App11">
      <h2>Get Started For Free</h2>
      <button><NuxtLink active-class="root" to="/app">Go App</NuxtLink></button>
    </div>
  </div>

  <div class="info">
    <h3>Matin Soleymani </h3>
    <h3> Zmat24 </h3>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  button {
    background-color: green;
    color: white;
    font-size: 30px;
    border-radius: 15px ;
    border: none;
    padding: 15px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .main {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 15px;
    margin: 50px;
  }

  .App11 , .login {
    background-color: aqua;
    text-align: center;
    padding: 15px;
    border-radius:20px ;
  }

  .info {
    text-align: center;
  }
</style>
