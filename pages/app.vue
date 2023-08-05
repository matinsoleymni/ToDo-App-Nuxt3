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
            <input @click="completed(this)" type="checkbox" name="check" id="check">
            <p style="color: red;" @click="destroy(task.id)">Trash</p>
            <p @click="edit(task.id)">Edit</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div class="active" :class="{'d':popup}">
    <h2>Edit :)</h2>
    <input type="text" name="editTitle" v-model="editTitle">      
    <input type="text" name="editdesc" v-model="editdesc">    
    <button >Edit</button>    
  </div>
</template>

<script setup>
/* All Tasks */
const tasks = ref();

/* @dev send user id to api for get Works */
let sendes = {
  id: localStorage.getItem("userid")
}

/* ! Get User data with user id on api*/
let data = $fetch('https://blokchainology.com/api/api/v1/tasks/' , {
  method: "POST",
  body: JSON.stringify(sendes)
});
 data.then(res => show(res));

 /* Show tasks on Front for user */
 function show (r){
    if(r.info.status_code == 200){
      title2 = ""
      desc   = ""
      tasks.value = r.data
    }else {
      alert('Login Fist')
    }

 }

/* models */
let title2 = ""
let desc = ""

/* for add new task (using api) */
function add(){

  /* check user login . then convert data to json */
  if(localStorage.getItem('userid')){
    const dat = {
      user_id: localStorage.getItem('userid'),
      title: title2,
      description: desc,
      completed: 0
    }

    /* send req on api for confirm new task */
    const ap = $fetch('https://blokchainology.com/api/api/v1/tasks/' , {
      method: "POST",
      body: JSON.stringify(dat)
    });

    /* Get All new data on Api */
    let data = $fetch('https://blokchainology.com/api/api/v1/tasks/' , {
      method: "POST",
      body: JSON.stringify(sendes)
    });
    data.then(res => show(res));

  }}

/* for delete task on api*/
function destroy(id){

  /* get confirm. then delete task */
  let conf = confirm("Are You Sure?")
  if(conf){
    let del = $fetch('https://blokchainology.com/api/api/v1/tasks/', {
    method: "DELETE",
    body: {
      "id": id
    }
  });
  }else {
    alert("Error")
  }
  
}

/* for edit tasks */
function edit(id){
  popup = true
  console.log(id);    
  }

/* for completed tasks */
function completed(e){
}
</script>



<style scoped>
  .d {
    display: block !important;
  }
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

  .inputs button , .active button {
    background-color: darkcyan;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
  }

  .active button  {
    padding: 10px 25px;
    margin-bottom: 10px;
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

  .active {
    display: none;
    position: absolute;
    top: 350px;
    left: 500px;
    text-align: center;
    background-color: aliceblue;
  }

  .active input {
    width: 90%;
    margin-bottom: 5px;
  }

</style>
