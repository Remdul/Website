<template>
  <div class='container'>
    <h1>Yo, {{ getUserName }}</h1>
    <p>Here's all your info:</p>
    <p>Username: {{ thisUsername }}</p>
    <p>Email: {{ thisUseremail }}</p>
  </div>
</template>

<script>

import { getPerson } from '../graphql/queries';
import { API, Auth } from 'aws-amplify';

export default {
  name: 'home',
  
  async created(){
    this.getPerson();
  },

  data() {
    return {
      thisUseremail: '',
      thisUsername: '',
    }
  },

  computed: {
    getUserName() {
      return this.$store.state.user.username
    },
    email() {
      return this.$store.state.user.email
    }
  },
  
  methods: {
    async getPerson() {
      const { attributes } = await Auth.currentUserInfo();
      console.log("STORE STATE: ", this.$store.state)
      console.log("USERNAME1: ", attributes.sub);

      const user = await API.graphql({
        query: getPerson,
        variables: {id: attributes.sub},
      });
      console.log("USER: ", user)
      this.thisUseremail = user.data.getPerson.email;
      this.thisUsername = user.data.getPerson.userName;
    }
  },
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
