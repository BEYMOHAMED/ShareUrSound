<template>
  <div>
      <Headervue/>
      <Footervue/>
  </div>
  <router-view/>
</template>

<script>
import Headervue from './components/NavBar.vue';
import Footervue from './components/Footervue.vue';

export default {
  name: 'App',
  components: {
    Headervue,
    Footervue,
  },
};
</script>
<style>
  @import './assets/main.css';
</style>

<style lang="scss">
body {
  margin: 0;
  min-height: 100vh;
  background-color: #F6F2EF;
}

</style>
