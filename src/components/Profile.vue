<template>
  <div class='container'>
    <h1>Yo, {{ thisUsername }}</h1>
    <p>Here's all your info:</p>
    <p>Username: {{ thisUsername }}</p>
    <p>Email: {{ thisUseremail }}</p>
  </div>
</template>

<script>

import { getPerson } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

export default {
  name: 'home',
  
  async created(){
    this.getPerson();
  },

  data() {
    return {
      thisUsername: '',  
      thisUseremail: '',  
    }
  },

  methods: {
    async getPerson() {
      const { variables } = {
        id: this.username,
      };
      
      console.log("STORE STATE: ", this.$store.state)
      console.log("USERNAME: ", this.username);

      const user = await API.graphql({
        query: getPerson,
        variables: {id: variables},
      });
      console.log("USER: ", user)
      this.thisUseremail = user.email;
      this.thisUsername = user.userName;
    }
  },
  
  computed: {
    username() {
      return this.$store.state.user.username
    },
    email() {
      return this.$store.state.user.email
    }
  }
}
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
