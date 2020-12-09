<template>
  <div class="about">
    <h1>Type</h1>
    <p>Id: {{ type.id }}</p>
    <p>name: {{ type.name }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'Type',
  setup() {
    const route = useRoute();
    const types = ref([]);
    onBeforeMount(async () => {
      const response = await axios.get(`https://api.shareyoursound.loscil.fr/api/type/${route.params.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      types.value = response.data.user;
    });
    console.log(types);
    return {
      types,
    };
  },
};
</script>
