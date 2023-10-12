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
          @click="toggleNavigation"
          :aria-expanded="isNavigationOpen"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <span style="margin: 0 30px"></span>
        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
          <div class="collapse navbar-collapse" :class="{ 'show': isNavigationOpen }">
          <input
            class="form-control mr-sm-2 search"
            type="search"
            placeholder="Search ...."
            aria-label="Search"
            @keyup.enter="redirectToSearch"
            v-model="searchQuery"
          />
          <span style="margin: 0 40px"></span>
          <form class="form-inline my-2 my-lg-0" v-if="user == null || user.username === 'Guest'">
            <router-link to="/register" class="btn register-button my-2 my-sm-0" type="submit">
              <span class="button-text">Register</span>
              <div class="sliding-background"></div>
            </router-link>
            <span style="margin: 0 20px"></span>
            <router-link to="/login" class="btn login-button my-2 my-sm-0" type="submit">Sign In</router-link>
          </form>
          <div class="user-profile" v-else>
            <img :src="require('@/assets/img/profile.jpg')" class="profile-img" />
            <span class="profile-name">{{user.names}}</span>
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
    return {
      isNavigationOpen: false,
      isMobile: false,
      searchQuery: '',
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'));
    // alert(JSON.stringify(this.user))
  },
  methods: {
    redirectToSearch() {
      if (this.searchQuery.trim() !== '') {
        this.$router.push({ name: 'SearchPage', query: { search: this.searchQuery.trim() } });
      }
    },
    toggleNavigation() {
      this.isNavigationOpen = !this.isNavigationOpen;
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768; 
    },
    mounted() {
      this.checkIfMobile();
      window.addEventListener('resize', this.checkIfMobile);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkIfMobile);
    },
  },
}
</script>
<style>
.user-profile {
  margin-left: 325px;
  position: relative;
}
.profile-img {
  height: 55px;
  border-radius: 50%;
}
.profile-name {
  width: 300%;
  position: absolute;
  bottom: -14px;
  left: 100%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 600;
  color: #333;
}
.search{
  background-color: #fef2f2;
  width: 50%;
}
.navbar-toggler{
  margin-left: 40%;
}
@media (max-width: 768px) {
  .search{
    background-color: #fef2f2;
    width: 100%;
  }
}


.register-button {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.button-text {
  position: relative;
  z-index: 2; 
}

.sliding-background {
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%; 
  height: 100%;
  background: linear-gradient(to right, #12cca8, #83ead6, #12cca8); 
  animation: slideEffect 2s infinite linear; 
  z-index: 1; 
}

@keyframes slideEffect {
  to {
    left: 100%;
  }
}
</style>
