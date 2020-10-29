<template>
  <div class="login-container">
      <form
        id="app"
        novalidate="true"
      >

        <div class="field">
          <input
            id="Username"
            v-model="username"
            type="text"
            name="username"
            class="text-input"
            placeholder="Username"
          >
        </div>

        <div class="field">
          <input
            id="email"
            v-model="email"
            type="text"
            name="email"
            class="text-input"
            placeholder="email"
          >
        </div>

        <div class="field">
          <input
          placeholder="Password"
            id="password"
            v-model="password"
            type="password"
            name="password"
            class="text-input"
          >
        </div>

        <p>
          <input
            type="submit"
            value="Submit"
            class="submit"
          >
        </p>
      </form>
  </div>
</template>
<script>

export default {

};
</script>

<style>

  .login-container{
    margin-top: 10vh;
    padding: 5vh 0;
    border-radius: 15px;
    border: none;
    box-shadow: 0 -1px 10px rgba(0,0,0,0.05);
    height: 40vh;
    width: 30vw;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label{
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .field{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }

  li{
    color: red;
    text-transform: uppercase;
    font-weight: bold;
  }

  .text-input{
    border: none;
    border-bottom: 2px solid #988270;
    outline: none;
    height: 3vh;
    width: 20vw;
    padding: 10px;
    font-size: 20px;
    color: #988270;
  }

  .submit{
    border: none;
    background-color: #FF6961;
    color: #FFF;
    font-size: 20px;
    padding: 15px;
    border-radius: 10px;
    outline: none;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: 3px solid #FF6961;
    transition: 0.2s;
  }

  .submit:hover{
    background-color: #fff;
    color: #FF6961;
  }
</style>
