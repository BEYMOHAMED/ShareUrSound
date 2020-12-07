<template>
  <div class="about">
    <h1>User Profile</h1>
    <p>Firstname: {{ firstname }}</p>
    <p>Lastname: {{ lastname }}</p>
    <p>Email: {{ email }}</p>
    <p>Followers:
      <router-link :to="{name:'UserFollowers', params: { id: id }}">
        {{ followers }}
      </router-link>
    </p>
    <p>Follows:
      <router-link :to="{name:'UserFollows', params: { id: id }}">
        {{ follows }}
      </router-link>
    </p>
    <button @click="follow" v-show="!followedByMe">Follow</button>
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
    const follows = ref(0);
    const id = ref(0);
    const followedByMe = ref(false);
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
      follows.value = response.data.user.follows;
      picture.value = response.data.user.picture;
      followedByMe.value = response.data.user.followedByMe;
      id.value = response.data.user.id;
    });
    const follow = async () => {
      const response = await axios.post(`https://api.shareyoursound.loscil.fr/api/user/follow/${id.value}`, {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      console.log(response.data);
    };
    return {
      firstname, email, lastname, followers, follows, picture, followedByMe, follow, id,
    };
  },
};
</script>
