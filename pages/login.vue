<template>
  <Head>
    <Title>Login Page</Title>
  </Head>
  <div class="main">
    <div class="titles">
      <h2>Login</h2>
    </div>

    <div class="inps">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      <button>Submit</button>

    </div>
  </div>
</template>

<script setup>

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
