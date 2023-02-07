<template>
        <main>
          <!-- head -->
          <header>
            <img src="./assets/pinia-logo.svg" alt="pinia-logo">
            <h1>Pinia Tasks</h1>
          </header>


                    <!-- new task form -->
                 <div class="new-task-form">
                          <TaskForm/>
                 </div>

          <!-- filter -->
          <nav class="filter">
              <button @click="filter='all'">all tasks</button>
              <button @click="filter='favs'">fav tasks</button>
          </nav>

          <!-- loading -->
          <div class="loading" v-if="loading">loading...</div>


          <!-- task list -->
          <div class="task-list" v-if="filter==='all'">
            <p>you have {{ totalCount }} tasks left to do</p>
            <div v-for="task in tasks" key="task.id">
              <TaskDetails :task="task"/>
            </div>
          </div>
          <div class="task-list" v-if="filter==='favs'">
            <p>you have {{ favCount }} favs to do</p>
            <div v-for="task in favs">
              <TaskDetails :task="task"/>
            </div>
          </div>
        </main>
        <button @click="TaskStore.$reset">reset state</button>
</template>
<script>
import { storeToRefs } from 'pinia';
import {ref} from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import {useTaskStore} from './store/TaskStore';
     export default{
      components:{
        TaskDetails,
        TaskForm
      },
      setup (){
         const TaskStore=useTaskStore();

          const {tasks, loading, favs,totalCount,favCount}=storeToRefs(TaskStore);

         TaskStore.getTasks();

         const filter=ref('all');

         return {TaskStore, filter,tasks, loading, favs,totalCount,favCount}
      }
     }
</script>