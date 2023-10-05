<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<!-- <script>
  import axios from 'axios'
  export default {
    name:'App',
    created() {
      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          if(error.response.status == 401) {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.href = '/'
          }
          return Promise.reject(error);
        }
      );
    }
  }
</script> -->
