<template>
  <div class="home">
    <Users/>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Users from '@/components/Users.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Users,
  },
};
</script>
