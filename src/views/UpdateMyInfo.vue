<template>
  <div class="about">
    <form
      @submit.prevent="updateMe"
    >
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model="firstname">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model="lastname">
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email">
      <button type="submit">Save</button>
    </form>
  </div>
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
