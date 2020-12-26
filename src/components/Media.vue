<template>
  <div class="home-container">
    <ul>
        <li
          v-for="media in medias"
          :key="media.id"
          class="f-container media"
        >
          <router-link
            :to="{name:'User', params: { id: media.author.id }}"
            class="media-author"
          >
            {{ media.author.firstname }} {{ media.author.lastname }}
          </router-link>
          <router-link
            :to="{name:'Medium', params: { id: media.id }}"
            class="media-title"
          >
            {{ media.name }}
          </router-link>
          <p>Like</p>
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
      console.log('media', response.data);
      medias.value = response.data.media;

      console.log(response);
    });
    return {
      medias,
    };
  },
};
</script>
