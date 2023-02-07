<template>
        <form @submit.prevent="handleSubmit">
              <input type="text" placeholder="i need to..." v-model="newTask">
              <button>Add</button>
        </form>
</template>

<script>
import {useTaskStore} from '../store/TaskStore';
import {ref} from 'vue';
     export default{
        setup(){
              const TaskStore=useTaskStore();
              const newTask=ref('');
              const handleSubmit=()=>{
                if (newTask.value.length>0){
                    TaskStore.addTask({
                        title:newTask.value,
                        isFav:false,
                        id:Math.floor(Math.random()*10000)
                    })
                    newTask.value='';
                }
              }
              return {handleSubmit, newTask}
        }
     }
</script>