<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding: 10px">
        <router-link to="/" class="navbar-brand">
          <img :src="require('@/assets/img/logo.png')" style="height: 50px" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <span style="margin: 0 30px"></span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search ...."
            aria-label="Search"
            style="width: 50%; background-color: #fef2f2"
          />
          <span style="margin: 0 40px"></span>
          <form class="form-inline my-2 my-lg-0" v-if="!user">
            <router-link to="/register" class="btn register-button my-2 my-sm-0" type="submit">Register</router-link>
            <span style="margin: 0 20px"></span>
            <router-link to="/login" class="btn login-button my-2 my-sm-0" type="submit">Sign In</router-link>
          </form>
          <div class="user-profile" v-else>
            <img :src="require('@/assets/img/profile.jpg')" class="profile-img" />
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data() {
    return {}
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
}
</script>
<style>
.user-profile {
  margin-left: 325px;
}
.profile-img {
    height: 55px;
    border-radius: 50%;
}
</style>
