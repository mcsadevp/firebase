<template>
  <AddForm/>
  <NewUsers/>
</template>

<script>
import AddForm from './components/AddForm.vue';
import NewUsers from './components/NewUsers.vue';

export default {
  name: 'App',
  components: {
    AddForm,
    NewUsers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
