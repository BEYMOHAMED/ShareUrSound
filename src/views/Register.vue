<template>
  <div class="login-container">
      <form
        id="app"
        novalidate="true"
        @submit.prevent="register"
      >

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
    padding: 5vh 0;
    border-radius: 15px;
    border: none;
    box-shadow: 0 -1px 10px rgba(0,0,0,0.05);
    height: 40vh;
    width: 30vw;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label{
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .field{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }

  li{
    color: red;
    text-transform: uppercase;
    font-weight: bold;
  }

  .text-input{
    border: none;
    border-bottom: 2px solid #988270;
    outline: none;
    height: 3vh;
    width: 20vw;
    padding: 10px;
    font-size: 20px;
    color: #988270;
  }

  .submit{
    border: none;
    background-color: #FF6961;
    color: #FFF;
    font-size: 20px;
    padding: 15px;
    border-radius: 10px;
    outline: none;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: 3px solid #FF6961;
    transition: 0.2s;
  }

  .submit:hover{
    background-color: #fff;
    color: #FF6961;
  }
</style>
