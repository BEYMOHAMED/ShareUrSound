<template>
  <div class="mf-container">
    <ul>
      <li v-for="follow in follows" :key="follow.id" class="f-container">
        <img :src="follow.picture" class="profile-img" alt="">
        <div>
          <p class="user-name">{{follow.firstname}} {{follow.lastname}}</p>
          <p class="user-email">{{follow.email}}</p>
          <div class="follow-container">
            <div class="follow">
              <p class="follow-nb">
                {{ follow.followers }}
              </p>
              <span class="follow-span">Followers</span>
            </div>
            <div class="follow">
              <p class="follow-nb">
                {{ follow.follows }}
              </p>
              <span class="follow-span">Follows</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  name: 'MyFollows',
  setup() {
    const follows = ref([]);
    onBeforeMount(async () => {
      try {
        const response = await axios.get('https://api.shareyoursound.loscil.fr/api/user/follow', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        follows.value = response.data.follows;
      } catch (error) {
        console.log(error);
      }
    });
    return {
      follows,
    };
  },
};
</script>
