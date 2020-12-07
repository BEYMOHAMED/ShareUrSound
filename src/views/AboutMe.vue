<template>
  <div class="about">
    <p>Firstname: {{ firstname }}</p>
    <p>lastname: {{ lastname }}</p>
    <p>email: {{ email }}</p>
    <p>id: {{ id }}</p>
    <p>Followers:
      <router-link :to="{name:'MyFollowers', params: { id: id }}">
        {{ followers }}
      </router-link>
    </p>
    <p>Follows:
      <router-link :to="{name:'MyFollows', params: { id: id }}">
        {{ follows }}
      </router-link>
    </p>
    <img :src="picture" >
    <button @click="update">Update Info</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'AboutMe',
  setup() {
    const router = useRouter();
    const firstname = ref('');
    const lastname = ref('');
    const email = ref('');
    const id = ref('');
    const picture = ref('');
    const followers = ref(0);
    const follows = ref(0);

    onBeforeMount(async () => {
      const response = await axios.get('https://api.shareyoursound.loscil.fr/api/user', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      console.log(response);
      firstname.value = response.data.user.firstname;
      lastname.value = response.data.user.lastname;
      email.value = response.data.user.email;
      id.value = response.data.user.id;
      picture.value = response.data.user.picture;
      followers.value = response.data.user.followers;
      follows.value = response.data.user.follows;
    });

    const update = () => {
      router.push({
        name: 'UpdateMe',
      });
    };
    return {
      firstname, lastname, email, picture, id, update, followers, follows,
    };
  },
};
</script>
