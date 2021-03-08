<template>
  <div id="app">
    <h1>Tasks</h1>
    <input type="text" v-model="title" placeholder="Task Title">
    <input type="text" v-model="description" placeholder="Task description">
    <button v-on:click="createTask">Create Task</button>
  
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Created</th>
              <th>Updated</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in todos" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.createdAt }}</td>
              <td>{{ item.updatedAt }}</td>
              <td class="text-right">
                <button v-on:click="">Edit Task</button>
                <a href="#" @click.prevent="deleteTask(item.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import { API, graphqlOperation } from 'aws-amplify';
import { createTask, deleteTask } from '../graphql/mutations';
import { listTasks } from '../graphql/queries';
import { onCreateTask, onDeleteTask } from '../graphql/subscriptions';

const subscription = API.graphql(graphqlOperation(onCreateTask)).subscribe({
  next: (eventData) => {
    let todo = eventData.value.data.onCreateTask;
    if (this.todos.some(item => item.id === todo.id)) return; // remove duplications
    this.todos = [...this.todos, todo];
  }
});

export default {
  name: 'app',

  async created(){
    this.getTodos();
  },

  data() {
    return {
      title: '',
      description: '',
      todos: []
    }
  },
  
  methods: {
    async createTask() {
      const { title, description } = this;
      if (!title || !description) return;
      const todo = { title, description };
      await API.graphql({
        query: createTask,
        variables: {input: todo},
      });
      this.title = '';
      this.description = '';
    },
    
    async deleteTask(pid){
      const details = {
        id: pid,
        _version: 1,
      };
      
      if (confirm('Are you sure you want to delete this task?')) {
        await API.graphql({
          query: deleteTask,
          variables: {input: details},
        });
      }
    },
    
    async getTodos() {
      const todos = await API.graphql({
        query: listTasks
      });
      this.todos = todos.data.listTasks.items.filter(item => item._deleted !== true);
    }
  },
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
