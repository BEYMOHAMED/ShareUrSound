<template>
  <div>
    <ul>
        <li v-for="type in types" :key="type.id">
            <router-link :to="{name:'Types', params: { id: type.id }}">
                {{ type.id }}
                {{ type.name }}
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  name: 'Types',
  setup() {
    const types = ref([]);
    onBeforeMount(async () => {
      const response = await axios.get('https://api.shareyoursound.loscil.fr/api/type', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      types.value = response.data.types;
    });
    return {
      types,
    };
  },
};
</script>
