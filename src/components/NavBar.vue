<template>
    <header>
        <div class="header-container">
          <router-link to="/home" class="logo">ShareYourSound</router-link>
          <div class="navigation">
            <router-link to="/about" class="nav-item">About Me</router-link>
            <router-link to="/media/add" class="nav-item">Add Media</router-link>
            <router-link
              v-show="!isLogged && !storeLogged"
              to="/login"
              class="nav-item"
            >
            Login
            </router-link>
            <router-link
              v-show="!isLogged && !storeLogged"
              to="/register"
              class="nav-item"
            >
              Sign-in
            </router-link>
            <router-link
              v-show="storeLogged || isLogged"
              to="/"
              class="nav-item"
              @click="logout"
            >
              Logout
            </router-link>
          </div>
        </div>
    </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Header',
  setup() {
    const store = useStore();
    const storeLogged = computed(() => store.state.isLogged);
    const isLogged = computed(() => sessionStorage.getItem('token'));
    const logout = () => {
      store.commit('logout');
      sessionStorage.clear();
    };
    return {
      isLogged, logout, storeLogged,
    };
  },
};
</script>
