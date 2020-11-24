<template>
  <div class="about">
    <p>Firstname: {{ firstname }}</p>
    <p>lastname: {{ lastname }}</p>
    <p>email: {{ email }}</p>
    <p>id: {{ id }}</p>
    <img :src="picture" >
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  name: 'AboutMe',
  setup() {
    const firstname = ref('');
    const lastname = ref('');
    const email = ref('');
    const id = ref('');
    const picture = ref('');

    onBeforeMount(async () => {
      const response = await axios.get('https://api.shareyoursound.loscil.fr/api/user', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      firstname.value = response.data.user.firstname;
      lastname.value = response.data.user.lastname;
      email.value = response.data.user.email;
      id.value = response.data.user.id;
      picture.value = response.data.user.picture;
    });
    return {
      firstname, lastname, email, picture, id,
    };
  },
};
</script>
