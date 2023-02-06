<template>
        <main>
          <!-- head -->
          <header>
            <img src="./assets/pinia-logo.svg" alt="pinia-logo">
            <h1>Pinia Tasks</h1>
          </header>
          <!-- task list -->
          <div class="task-list">
            <p>all tasks</p>
            <div v-for="task in TaskStore.tasks">
              <TaskDetails :task="task"/>
            </div>
          </div>
          <div class="task-list">
            <p>favorite tasks</p>
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