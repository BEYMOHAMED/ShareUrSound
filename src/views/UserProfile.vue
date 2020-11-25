<template>
  <div class="about">
    <h1>User Profile</h1>
    <p>Firstname: {{ firstname }}</p>
    <p>Lastname: {{ lastname }}</p>
    <p>Email: {{ email }}</p>
    <p>Followers: {{ followers }}</p>
    <img :src="picture" alt="">
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'userProfile',
  setup() {
    const route = useRoute();
    const firstname = ref('');
    const email = ref('');
    const lastname = ref('');
    const picture = ref('');
    const followers = ref(0);
    onBeforeMount(async () => {
      const response = await axios.get(`https://api.shareyoursound.loscil.fr/api/user/${route.params.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      firstname.value = response.data.user.firstname;
      email.value = response.data.user.email;
      lastname.value = response.data.user.lastname;
      followers.value = response.data.user.followers;
      picture.value = response.data.user.picture;
    });
    return {
      firstname, email, lastname, followers, picture,
    };
  },
};
</script>
