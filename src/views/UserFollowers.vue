<template>
  <div>
    <h1>User Followers</h1>
    <ul>
      <li v-for="follower in followers" :key="follower.id">
        <p>{{follower.firstname}}</p>
        <p>{{follower.lastname}}</p>
        <img :src="follower.picture" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'userFollowers',
  setup() {
    const route = useRoute();
    const followers = ref([]);
    onBeforeMount(async () => {
      try {
        const response = await axios.get(`https://api.shareyoursound.loscil.fr/api/user/followers/${route.params.id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        followers.value = response.data.followers;
      } catch (error) {
        console.log(error);
      }
    });
    return {
      followers,
    };
  },
};
</script>
