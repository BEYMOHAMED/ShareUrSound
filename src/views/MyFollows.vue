<template>
  <div>
    <h1>My Follows</h1>
    <ul>
      <li v-for="follow in follows" :key="follow.id">
        <p>{{follow.firstname}}</p>
        <p>{{follow.lastname}}</p>
        <img :src="follow.picture" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  name: 'MyFollows',
  setup() {
    const follows = ref([]);
    onBeforeMount(async () => {
      try {
        const response = await axios.get('https://api.shareyoursound.loscil.fr/api/user/follow', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        follows.value = response.data.follows;
      } catch (error) {
        console.log(error);
      }
    });
    return {
      follows,
    };
  },
};
</script>
