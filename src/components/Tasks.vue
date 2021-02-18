<template>
  <div id="app">
    <h1>Tasks</h1>
    <input type="text" v-model="title" placeholder="Task Title">
    <input type="text" v-model="description" placeholder="Task description">
    <button v-on:click="createTask">Create Task</button>
  
    <div v-for="item in tasks" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>

  </div>
</template>


<script>
import { API } from 'aws-amplify';
import { onCreateTask } from '../graphql/mutations';
import { listTasks } from '../graphql/queries';


export default {
  name: 'app',

  async created() {
    this.getTasks();
    this.subscribe();
  },

  data() {
    return {
      title: '',
      description: '',
      tasks: []
    }
  },
  methods: {
    subscribe() {
      API.graphql({ query: onCreateTask })
        .subscribe({
          next: (eventData) => {
            let todo = eventData.value.data.onCreateTask;
            if (this.todos.some(item => item.title === todo.title)) return; // remove duplications
            this.todos = [...this.todos, todo];
          }
        });
    },

    async getTasks() {
      const todos = await API.graphql({
        query: listTasks
      });
      this.todos = todos.data.listTasks.items;
    }

  }
};

</script>

<style scoped>
.container {
  padding-top: 80px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.container h1 {
  margin-bottom: 0px;
}
.container p {
  font-size: 18px;
  text-align: left;
}
</style>
