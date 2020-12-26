<template>
  <div>
      <form
        class="login-container"
        id="app"
        novalidate="true"
        @submit.prevent="addMedia"
      >
        <h2>ADD MEDIA</h2>
        <img src="../assets/addmusic.svg" class="music-icon"/>
        <input
          class="text-input"
          v-model="mediaName"
          type="text"
          name="mediaName"
          placeholder="Media Name"
        >
        <input
          placeholder="Media File"
          class="text-input"
          v-model="mediaFile"
          type="text"
          name="mediaFile"
        >
        <button
          type="submit"
          class="form-btn"
        >
          Upload
        </button>
      </form>
  </div>
</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const mediaName = ref('');
    const mediaFile = ref('');

    function addMedia() {
      axios.post('https://api.shareyoursound.loscil.fr/api/media',
        {
          name: mediaName.value,
          file: mediaFile.value,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        })
        .then(async (response) => {
          if (response.data.code === 200) {
            alert('File added');
            router.push({
              name: 'Home',
            });
          } else {
            alert('Failed to add media!');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      mediaName,
      mediaFile,
      addMedia,
    };
  },
};
</script>
