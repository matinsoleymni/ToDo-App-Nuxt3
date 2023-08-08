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
        <li class="mt-2 bg-green-400 rounded-2xl flex justify-between"  v-for="task in tasks" :class="{'bg-orange-600': task.completed == 'true'}">
          <span  class="ml-4 p-2 text-lg">
            <h3 :class="{'line-through': task.completed == 'true'}" >{{task.title}}</h3>
            <p class="ml-4 text-gray-600" :class="{'line-through': task.completed == 'true'}" >{{task.description}}</p>
          </span>
          <span class="flex items-center gap-5 cursor-pointer px-5 text-lg">
            <input @click="complete(task)" type="checkbox" v-bind="{checked: task.completed== 'true'}"  name="check" class="w-7 h-7">
            <p class="text-red-100 hover:text-blue-600" @click="destroy(task.id)">Trash</p>
            <p @click="showEdit(task)">Edit</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div v-show="popup" class="absolute top-40 left-96 max-md:left-0 bg-blue-500 p-10 rounded-lg text-center">
    <h2 class="text-2xl mb-4">Edit Task </h2>
    <input class="w-full my-2 px-4 py-1 outline-none text-lg rounded-2xl" v-model="editTitle" type="text" name="editTitle">      
    <input class="w-full my-2 px-4 py-1 outline-none text-lg rounded-2xl" v-model="editDesc" type="text" name="editdesc">    
    <input v-model="TaskData" type="hidden">    
    <button @click="edit(TaskData)" class="bg-green-500 mx-2 text-gray-50  px-5 py-2 rounded-3xl">Edit</button>  
    <button @click="popup = false" class="bg-red-500 text-gray-50  px-5 py-2 rounded-3xl">Cancel</button>    
  </div>
</template>

<script setup>
/* All Tasks */
const tasks = ref();
const router = useRouter()
const base = "https://blokchainology.com/api/api/v1/tasks/"
let editTitle = ""
let editDesc = ""
let TaskData = ""
const popup = ref()
popup.value = false

/* @dev send user id to api for get Works */
let sendes = {
  id: ""
}

onMounted(()=> {
  sendes.id = localStorage.getItem("userid")
  GetAll()
})

/* ! Get User data with user id on api*/
function GetAll(){
  let data = $fetch( base, {
    method: "POST",
    body: JSON.stringify(sendes)
  });
    data.then(res => show(res));
}

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
    const ap = $fetch( base , {
      method: "POST",
      body: JSON.stringify(dat)
    });

    /* Get All new data on Api */
    GetAll()

  }}

/* for delete task on api*/
function destroy(id){

  /* get confirm. then delete task */
  let conf = confirm("Are You Sure?")
  if(conf){
    let del = $fetch( base, {
    method: "DELETE",
    body: {
      "id": id
    }
  });
  // Get All data
  GetAll()
  }else {
    alert("Error")
  }
}

/* for edit tasks */
function showEdit(task){
  popup.value = true
  TaskData = task
  editTitle = task.title
  editDesc  = task.description
}

function edit(task){
  let datas = {
    id: task.id,
    title: editTitle,
    description: editDesc,
    completed: task.completed
  }

  let data = $fetch(base , {
    method: "PUT",
    body: JSON.stringify(datas)
  })
  let status = ""
  data.then(res => {
    if(res.info.status_code == 200){
      GetAll()
    }else {
      alert("Some Error")
    }})

    popup.value = false

}

/* for completed tasks */
function complete(task){
  let datas = {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: ""
  }
  if(task.completed == "true"){
    datas.completed = "false"
    let data = $fetch( base , {
      method: "PUT",
      body: JSON.stringify(datas)
    });
  }else {
    datas.completed = "true"
    let data = $fetch( base , {
      method: "PUT",
      body: JSON.stringify(datas)
    });
  }
  
GetAll()
}
</script>