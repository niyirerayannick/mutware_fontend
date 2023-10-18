<template>
  <div>
    <Header />
      <div class="page-container">
        <img :src="require('@/assets/img/page-error.gif')" class="d-block w-100 img-notfound" alt="..." />
        <div class="item button-pulse" style="--bg-color: #e67e22;margin-left:36%;">
          <div class="button__wrapper">
            <div class="pulsing"></div>
            <router-link to="/" class="waving-button" type="submit">Return Home</router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '../components/AppHeader.vue'

export default {
  name: 'LoginPage',
  components: {
    Header,
  },
  data() {
    return {
    }
  },
}
</script>
<style>
  .page-container {
    width: 50%;
    margin: auto;
  }
  .img-notfound{
    height: 70vh;
  }
  .button-pulse .waving-button{
    width: 100%;
  }
  .pulsing:before, .pulsing:after{
    width: 100%;
  }
</style>
