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
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in todos" :key="item.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
              <td class="text-right">
                <button v-on:click="">Edit Task</button>
                <button v-on:click="">Delete Task</button>
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
import { createTask } from '../graphql/mutations';
import { listTasks } from '../graphql/queries';
import { onCreateTask } from '../graphql/subscriptions';

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

    async getTodos() {
      const todos = await API.graphql({
        query: listTasks
      });
      console.log("TODOS 1: ", todos);
      this.todos = todos.data.listTasks.items;
      console.log("TODOS 2: ", this.todos);
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
