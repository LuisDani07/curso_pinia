<template>
        <main>
          <!-- head -->
          <header>
            <img src="./assets/pinia-logo.svg" alt="pinia-logo">
            <h1>Pinia Tasks</h1>
          </header>

          <!-- filter -->
          <nav class="filter">
              <button @click="filter='all'">all tasks</button>
              <button @click="filter='favs'">all tasks</button>
          </nav>


          <!-- task list -->
          <div class="task-list" v-if="filter==='all'">
            <p>you have {{ TaskStore.totalCount }} tasks left to do</p>
            <div v-for="task in TaskStore.tasks" key="task.id">
              <TaskDetails :task="task"/>
            </div>
          </div>
          <div class="task-list" v-if="filter==='favs'">
            <p>you have {{ TaskStore.favCount }} favs to do</p>
            <div v-for="task in TaskStore.favs">
              <TaskDetails :task="task"/>
            </div>
          </div>
        </main>
</template>
<script>
import {ref} from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import {useTaskStore} from './store/TaskStore';
     export default{
      components:{
        TaskDetails
      },
      setup (){
         const TaskStore=useTaskStore();

         const filter=ref('all');

         return {TaskStore, filter}
      }
     }
</script>