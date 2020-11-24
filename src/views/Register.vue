<template>
  <div class="login-container">
      <form
        id="app"
        novalidate="true"
        @submit.prevent="register"
      >
        <div class="containerone">
          <div class="field">
            <input
              id="firstname"
              v-model="firstname"
              type="text"
              name="firstname"
              class="text-input"
              placeholder="firstname"
            >
          </div>

          <div class="field">
            <input
              id="lastname"
              v-model="lastname"
              type="text"
              name="lastname"
              class="text-input"
              placeholder="lastname"
            >
          </div>

          <div class="field">
            <input
              id="email"
              v-model="email"
              type="text"
              name="email"
              class="text-input"
              placeholder="email"
            >
          </div>

          <div class="field">
            <input
            placeholder="Password"
              id="password"
              v-model="password"
              type="password"
              name="password"
              class="text-input"
            >
          </div>
        </div>
        <button type="submit">Sign up</button>
      </form>
  </div>
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
      console.log('firstname', firstname);
      axios.post('https://api.shareyoursound.loscil.fr/api/register', {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      })
        .then((response) => {
          console.log(response.data);
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

<style>
  .login-container{
    margin-top: 10vh;
    display: flex;
  }

</style>
