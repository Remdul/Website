<template>
  <div id="app">
    <h1>Tasks</h1>
    <input type="text" v-model="title" placeholder="Task Title">
    <input type="text" v-model="description" placeholder="Task description">
    <button v-on:click="createTask">Create Task</button>
  </div>
</template>


<script>
import { API } from 'aws-amplify';
import { createTask } from '../graphql/mutations';

export default {
  name: 'app',
  data() {
    return {
      title: '',
      description: ''
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
