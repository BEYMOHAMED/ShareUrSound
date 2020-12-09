<template>
  <div>
    <h1>Media</h1>
    <ul>
        <li v-for="media in medias" :key="media.id">
          <router-link :to="{name:'Medium', params: { id: media.id }}">
            {{ media.name }}
          </router-link>
          <p>Like</p>
          <router-link :to="{name:'User', params: { id: media.author.id }}">
            <p>Author: {{ media.author.firstname }} {{ media.author.lastname }}</p>
          </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  name: 'Media',
  setup() {
    const medias = ref([]);
    onBeforeMount(async () => {
      const response = await axios.get('https://api.shareyoursound.loscil.fr/api/media', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      medias.value = response.data.media;

      console.log(response);
    });
    return {
      medias,
    };
  },
};
</script>
