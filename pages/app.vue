<template>
  <Head>
    <Title>ToDo App - Zmat24</Title>
  </Head>
  <div>
    <div class="inputs">
      <input v-model="title2" type="text" placeholder="Title" name="title" id="title">
      <input v-model="desc" type="text" placeholder="Description" name="description  " id="description">
      <button @click="add()">Add</button>
    </div>
    <hr><hr><hr>

    <div class="tasks">
      <ul>
        <li v-for="task in tasks">
          <span>
            <h3>{{task.title}}</h3>
            <p>{{task.description}}</p>
          </span>
          <span id="actions">
            <input @click="tesdt()" v-model="status" type="checkbox" name="check" id="check">
            <p @click="destroy(task.id)">Trash</p>
            <p>Edit</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const tasks = ref();
let data = await $fetch('https://blokchainology.com/api/api/v1/tasks/');
tasks.value = data.data;

let title2 = ""
let desc = ""
function add(){
  const dat = {
    user_id: 1,
    title: title2,
    description: desc,
    completed: 0
  }
  const ap = $fetch('https://blokchainology.com/api/api/v1/tasks/' , {
    method: "POST",
    body: JSON.stringify(dat)
  });

  let data2 = $fetch('https://blokchainology.com/api/api/v1/tasks/');
  tasks.value = data2.data;
}

function destroy(id){
  let conf = confirm("Are You Sure?")
  if(conf){
    let del = $fetch('https://blokchainology.com/api/api/v1/tasks/', {
    method: "DELETE",
    body: {
      "id": id
    }
  });

  console.log(del);
  }else {

  }
  
}
const status = ""
function tesdt(){
  console.log(status);
}
</script>



<style scoped>
  .inputs {
    display: flex;
    justify-content: center;
    margin: 25px;
    gap: 25px;
  }

  input {
    width: 100%;
    border-radius: 15px;
    padding: 5px 10px;
    font-size: 22px;
  }

  .inputs button {
    background-color: darkcyan;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
  }

  li {
    background-color: antiquewhite;
    list-style: decimal;
    padding: 5px 15px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }

  #actions {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    cursor: pointer;
    padding: 0px 20px;
  }

  #check {
    width: 30px;
    height: 30px;
  }
</style>
