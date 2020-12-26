<template>
  <form
    id="app"
    novalidate="true"
    @submit.prevent="register"
    class="login-container"
  >
    <h1>REGISTER</h1>
    <img src="../assets/music.svg" class="music-icon"/>
    <input
      v-model="firstname"
      type="text"
      class="text-input"
      placeholder="firstname"
    >
    <input
      v-model="lastname"
      type="text"
      class="text-input"
      placeholder="lastname"
    >
    <input
      v-model="email"
      type="email"
      class="text-input"
      placeholder="email"
    >
    <input
      placeholder="Password"
      v-model="password"
      type="password"
      class="text-input"
    >
    <button
      type="submit"
      class="form-btn"
    >
      Sign up
    </button>
  </form>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Register',
  setup() {
    const firstname = ref('');
    const lastname = ref('');
    const email = ref('');
    const password = ref('');
    function register() {
      axios.post('https://api.shareyoursound.loscil.fr/api/register', {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      })
        .then(() => {
          window.location = '/login';
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      firstname, lastname, email, password, register,
    };
  },
};
</script>
