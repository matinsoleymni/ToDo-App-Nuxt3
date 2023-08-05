<template>
  <div>
    <header>
      <div class="right">
        <img src="~assets/images/logo.png" alt="Logo" width="85px">
      </div>
      <div class="left">
        <ul>
          <li><NuxtLink active-class="root" to="/">Home</NuxtLink></li>
          <li><NuxtLink active-class="root" to="/login">Login</NuxtLink></li>
          <li><NuxtLink active-class="root" to="/app">App</NuxtLink></li>
        </ul>
      </div>
    </header>
    
    <slot />

    <footer>
      <p>24</p>
    </footer>
  </div>
</template>

<style scoped>
* {
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: aliceblue;
}

ul {
  display: flex;
  list-style: none;
  gap: 15px;
  font-size: 20px;
}

footer {
  bottom: 0px;
  background-color: blueviolet;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 24px;
  border-radius: 15px;
  position: absolute;
  width: calc(100% - 20px);
  margin: 10px 0px ;
}

</style>
