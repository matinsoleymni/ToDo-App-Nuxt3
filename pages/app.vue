<template>
  <Head>
    <Title>ToDo App - Zmat24</Title>
  </Head>
  <div>
    <div class="flex justify-center mt-10 flex-row gap-8 max-md:flex-col">
      <input class="w-full text-2xl rounded-md px-4 outline-none" v-model="title2" type="text" placeholder="Title" name="title" id="title">
      <input class="w-full text-2xl rounded-md px-4 outline-none" v-model="desc" type="text" placeholder="Description" name="description  " id="description">
      <button class="bg-green-700 text-gray-50 p-3 cursor-pointer rounded-md m-2" @click="add()">Add</button>
    </div>
    <hr><hr><hr>

    <div class="tasks">
      <ul>
        <li class="mt-2 bg-green-400 rounded-2xl flex justify-between"  v-for="task in tasks">
          <span :class="{'bg-red-400': task.completed == 'true'}" class="ml-4 p-2 text-lg">
            <h3>{{task.title}}</h3>
            <p class="ml-4 text-gray-600">{{task.description}}</p>
          </span>
          <span id="actions">
            <input @click="complete(this)" type="checkbox" name="check" class="w-7 h-7">
            <p class="text-red-500 hover:text-red-600" @click="destroy(task.id)">Trash</p>
            <p @click="edit(task.id)">Edit</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div class="active">
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

 const router = useRouter()

 /* Show tasks on Front for user */
 function show (r){
    if(r.info.status_code == 200){
      title2 = ""
      desc   = ""
      tasks.value = r.data
    }else {
      alert('Login Fist')
      router.push({ name: 'login' })
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

  let data = $fetch('https://blokchainology.com/api/api/v1/tasks/' , {
    method: "POST",
    body: JSON.stringify(sendes)
  });
    data.then(res => show(res));


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
function complete(e){
}
</script>



<style scoped>

  #actions {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    cursor: pointer;
    padding: 0px 20px;
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
