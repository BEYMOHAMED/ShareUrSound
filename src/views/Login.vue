<template>
  <div class="login-container">
      <form
        id="app"
        novalidate="true"
        @submit.prevent="login"
      >
        <div class="containerone">
          <div class="field">
            <input
              id="username"
              v-model="username"
              type="text"
              name="username"
              class="text-input"
              placeholder="Username"
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
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const username = ref('');
    const password = ref('');

    function login() {
      axios.post('https://api.shareyoursound.loscil.fr/api/login_check', {
        username: username.value,
        password: password.value,
      })
        .then(async (response) => {
          console.log(response);
          sessionStorage.setItem('token', response.data.token);
          await store.commit('login');
          router.push({
            name: 'Home',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      password,
      username,
      login,
    };
  },
};
</script>

<style>

  .login-container{
    margin-top: 10vh;
    display: flex;
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
