<template>
  <div>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.firstname }}
            {{ user.lastname }}
            {{ user.email }}
        </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  name: 'Users',
  setup() {
    const users = ref([]);
    onBeforeMount(async () => {
      const response = await axios.get('https://api.shareyoursound.loscil.fr/api/users', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      users.value = response.data.users;
      console.log(users);
    });
    return {
      users,
    };
  },
};
</script>
