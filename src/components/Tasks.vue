<template>
  <div class='container'>
    <h1>Yo, {{ username }}</h1>
    <p>Here's all your info:</p>
    <p>Username: {{ username }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script>

export default {
  name: 'Tasks',
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
