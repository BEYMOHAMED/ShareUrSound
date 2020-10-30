<template>
  <div id="nav">
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
body {
  margin: 0;
  min-height: 100vh;
  background-color: #F6F2EF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#nav {
  padding: 15px;
  margin-top: 20px;
  background-color: #FF6961;
  width: 10vw;
  border-radius: 50px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #FDF7C2;
    }
  }
}
</style>
