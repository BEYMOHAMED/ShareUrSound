<template>
  <div class="about">
    <h1>Medium</h1>
    <p>name: {{ name }}</p>
    <audio controls :src=file>
    </audio>
    <p>file: {{ file }}</p>
    <p>Author: {{ author }}</p>
    <p>Likes: {{likes}}</p>
    <p>Type: </p>
    <ul>
      <li v-for="type in types" :key="type.id">
        {{type.name}} <button @click="deleteType(type.id)">X</button>
      </li>
    </ul>
    <p>Add type:</p>
    <form @submit.prevent="addType">
      <select v-model="selectedType">
        <option v-for="type in allTypes" :key="type.id" :value=type.id >{{type.name}}</option>
      </select>
      <button type="submit">Add type</button>
    </form>
    <button @click="like" v-show="!liked">Like</button>
    <button @click="unlike" v-show="liked">Unlike</button>
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
    const file = ref('');
    const author = ref('');
    const liked = ref(false);
    const likes = ref(0);
    const types = ref([]);
    const selectedType = ref('');
    const allTypes = ref([]);
    const userID = ref('');
    onBeforeMount(async () => {
      const userInfo = await axios.get('https://api.shareyoursound.loscil.fr/api/user', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      userID.value = userInfo.data.user.id;

      const getAllTypes = await axios.get('https://api.shareyoursound.loscil.fr/api/type', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      allTypes.value = getAllTypes.data.types;

      const response = await axios.get(`https://api.shareyoursound.loscil.fr/api/media/${route.params.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      console.log(response.data.medium);
      name.value = response.data.medium.name;
      file.value = response.data.medium.file;
      types.value = response.data.medium.types;
      likes.value = response.data.medium.likers.length;
      author.value = `${response.data.medium.author.firstname} ${response.data.medium.author.lastname}`;

      if (response.data.medium.likers.filter((e) => e.id === userID.value).length > 0) {
        liked.value = true;
      }
    });

    const like = async () => {
      await axios.post(`https://api.shareyoursound.loscil.fr/api/media/like/${route.params.id}`, {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      liked.value = true;
    };

    const unlike = async () => {
      await axios.delete(`https://api.shareyoursound.loscil.fr/api/media/like/${route.params.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      liked.value = false;
    };

    const addType = async () => {
      await axios.post(`https://api.shareyoursound.loscil.fr/api/media/${route.params.id}/type/${selectedType.value}`, {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      alert('Type added Successfuly');
    };

    const deleteType = async (id) => {
      const response = await axios.delete(`https://api.shareyoursound.loscil.fr/api/media/${route.params.id}/type/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      if (response.status === 200) {
        types.value = types.value.filter((type) => type.id !== id);
      } else {
        alert('Something went wrong, please retry.');
      }
    };
    return {
      name,
      types,
      addType,
      deleteType,
      allTypes,
      selectedType,
      likes,
      author,
      like,
      unlike,
      liked,
      file,
      userID,
    };
  },
};
</script>
