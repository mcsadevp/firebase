<template>
  <div class="user-container">
    <h2>DATOS DE USUARIO</h2>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-card">
        <h2>NOMBRE</h2>
        <p>{{ user.name }}</p>
        <h2>EMAIL</h2>
        <p>{{ user.email }}</p>
        <button @click="deleteUser(user.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NewUsers',
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['deleteUser']),
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
  }
}
</script>

  
  <style scoped>
.user-container {
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
}
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.user-card {
  border: 1px solid #333;
  margin: 10px auto;
  padding: 20px;
  max-width: 300px;
  position: relative;
}
.user-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}
.user-card p {
  margin: 5px 0 20px 0;
}
button {
  padding: 10px 20px;
  border: 1px solid #999999;
  border-radius: 3px;
  background-color: white;
  color: #999999;
  cursor: pointer;
}
button:hover {
  background-color: #f0f0f0;
}

.user-card::before,
.user-card::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #333;
}
.user-card::before {
  top: -5px;
  left: -5px;
}
.user-card::after {
  bottom: -5px;
  right: -5px;
}
</style>