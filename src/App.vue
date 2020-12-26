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
  background-color: #FCF7F8;
  color: #09090F;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>
