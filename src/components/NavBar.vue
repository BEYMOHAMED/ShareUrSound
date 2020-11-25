<template>
    <header>
        <div class="headerback">
            <div><h2>ShareYourSound</h2></div>
            <div class="listnav">
                <div><router-link to="/about" class="removeliststyle">About Me</router-link></div>
                <div><router-link to="/" class="removeliststyle">Home</router-link></div>
                <div><router-link to="/" class="removeliststyle">Friends</router-link></div>
                <div v-show="!isLogged && !storeLogged">
                  <router-link to="/login" class="removeliststyle">Login</router-link>
                </div>
                <div v-show="!isLogged && !storeLogged">
                  <router-link to="/register" class="removeliststyle">Sign-in</router-link>
                </div>
                <div v-show="storeLogged || isLogged">
                  <router-link to="/" class="removeliststyle" @click="logout">Logout</router-link>
                </div>
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
