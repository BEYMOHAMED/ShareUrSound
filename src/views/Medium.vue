<template>
  <div class="about">
    <h1>Medium</h1>
    <p>name: {{ name }}</p>
    <p>Author: {{ author }}</p>
    <p>Likes: {{likes}}</p>
    <p>Type: </p>
    <ul>
      <li v-for="type in types" :key="type.id">
        {{type.name}}
      </li>
    </ul>
    <button @click="like" v-show="!liked">Like</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'Medium',
  setup() {
    const route = useRoute();
    const name = ref('');
    const author = ref('');
    const liked = ref(false);
    const likes = ref(0);
    const types = ref([]);
    onBeforeMount(async () => {
      const response = await axios.get(`https://api.shareyoursound.loscil.fr/api/media/${route.params.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      console.log(response);
      name.value = response.data.medium.name;
      types.value = response.data.medium.types;
      likes.value = response.data.medium.likers.length;
      author.value = `${response.data.medium.author.firstname} ${response.data.medium.author.lastname}`;
    });

    const like = async () => {
      const response = await axios.post(`https://api.shareyoursound.loscil.fr/api/media/like/${route.params.id}`, {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      liked.value = true;
      console.log(response.data);
    };
    return {
      name, types, likes, author, like, liked,
    };
  },
};
</script>
