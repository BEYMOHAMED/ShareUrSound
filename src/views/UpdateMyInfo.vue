<template>
  <form
    @submit.prevent="updateMe"
    class="login-container"
  >
    <h2>UPDATE PROFILE</h2>
    <img src="../assets/user.svg" class="music-icon"/>
    <input
      class="text-input"
      type="text"
      v-model="firstname"
      placeholder="firstname"
    >
    <input
        class="text-input"
        type="text"
        v-model="lastname"
        placeholder="lastname"
    >
    <input
      class="text-input"
      type="text"
      v-model="email"
      placeholder="email"
    >
    <button
      type="submit"
      class="form-btn"
    >
      Save
    </button>
  </form>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'UpdateMyInfo',
  setup() {
    const router = useRouter();
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

    const updateMe = () => {
      axios.put('https://api.shareyoursound.loscil.fr/api/user',
        {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        })
        .then(() => {
          router.push({
            name: 'AboutMe',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return {
      firstname, lastname, email, picture, id, updateMe,
    };
  },
};
</script>
