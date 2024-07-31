<template>
  <div class="form-container">
    <h1>Registrate</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-row">
        <label>Su nombre:</label>
        <input v-model="newUser.name" placeholder="Nuevo nombre de usuario" />
      </div>
      <div class="form-row">
        <label>Su Email:</label>
        <input  type="email" v-model="newUser.email" placeholder="Nuevo e-mail de usuario" />
      </div>
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AddForm',
  computed: {
    ...mapState(['newUser'])
  },
  methods: {
    ...mapActions(['setNewUser', 'addUser']),
    handleSubmit() {
      if (this.newUser.name.trim() && this.newUser.email.trim()) {
        this.addUser();
      } else {
        alert('Porfavor rellena todos los campos.');
      }
    }
  }
}
</script>


<style scoped>
.form-container {
  border: 1px solid #999999;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #999999;
}
h1 {
  font-size: 48px;
  color: #999999;
}
.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
label {
  flex-basis: 40%;
  text-align: left;
}
input {
  flex-basis: 55%;
  padding: 5px;
  border: 1px solid #999999;
  border-radius: 3px;
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
.link-bio {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid #999999;
  border-radius: 3px;
  color: #999999;
  text-decoration: none;
}
.link-bio:hover {
  background-color: #f0f0f0;
}
</style>