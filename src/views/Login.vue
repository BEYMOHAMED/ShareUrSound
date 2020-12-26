<template>
  <form
    class="login-container"
    novalidate="true"
    @submit.prevent="login"
  >
    <h1>LOGIN</h1>
    <img src="../assets/music.svg" class="music-icon"/>
        <input
          id="username"
          v-model="username"
          type="text"
          name="username"
          class="text-input"
          placeholder="Username"
        >
        <input
        placeholder="Password"
          id="password"
          v-model="password"
          type="password"
          name="password"
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
