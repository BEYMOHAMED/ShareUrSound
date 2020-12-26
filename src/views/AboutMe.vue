<template>
  <div class="f-container">
    <img :src="picture" class="profile-img">
    <div>
      <p class="user-name">{{ firstname }} {{ lastname }}</p>
      <p class="user-email">{{ email }}</p>
      <div class="follow-container">
        <div class="follow">
          <router-link
            :to="{name:'MyFollowers', params: { id: id }}"
            class="follow-nb"
          >
            {{ followers }}
          </router-link>
          <p class="follow-span">Followers</p>
        </div>
        <div class="follow">
          <router-link
            :to="{name:'MyFollows', params: { id: id }}"
            class="follow-nb"
          >
            {{ follows }}
          </router-link>
          <p class="follow-span">Follows</p>
        </div>
      </div>
    </div>
    <button
      @click="update"
      class="update-btn"
    >
      Update Info
    </button>
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
