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
            <!-- <router-link to="/register" class="btn register-button my-2 my-sm-0" type="submit">
              <span class="button-text">Register</span>
              <div class="sliding-background"></div>
            </router-link> -->
            <div class="item button-pulse" style="--bg-color: #e67e22">
              <div class="button__wrapper">
                <div class="pulsing"></div>
                <router-link to="/register" class="waving-button" type="submit">Register</router-link>
              </div>
            </div>
            <span style="margin: 0 20px"></span>
            <router-link to="/login" class="btn login-button my-2 my-sm-0" type="submit"><b>Sign In</b></router-link>
          </form>
          <div v-else style="margin-top:-2%">
            <!-- <router-link to="/membership" class="btn register-button my-2 my-sm-0 membership" type="submit">
              <span class="button-text"><b>Unlock Premium</b> </span>
              <div class="sliding-background"></div>
            </router-link> -->
           <div class="item button-typewriter writter" style="--bg-color: #e74c3c">
            <div class="button__wrapper">
              <router-link :to="'/membership'" class="premium-button" role="button">
                <p class="premium-text"><b>Unlock Premium</b></p>
              </router-link>
            </div>
          </div>
            <div class="dropdown" @click="toggleDropdown" ref="dropdown">
              <img
                :src="require('@/assets/img/profile.jpg')"
                alt="Profile Image"
                class="profile-img"
              />
              <div class="dropdown-menu" :class="{ show: isDropdownOpen }">
                <router-link :to="'/profile'" class="dropdown-item">Profile</router-link>
                <a class="dropdown-item" href="#" @click="logout">Log Out</a>
              </div>
            </div>
            <!-- <img :src="require('@/assets/img/profile.jpg')" class="profile-img" /> -->
            <!-- <span class="profile-name">{{user.names}}</span> -->
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
      isDropdownOpen: false,
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'));
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
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      if (this.isDropdownOpen) {
        document.addEventListener('click', this.closeDropdownOnClickOutside);
      } else {
        document.removeEventListener('click', this.closeDropdownOnClickOutside);
      }
    },
    closeDropdownOnClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
        document.removeEventListener('click', this.closeDropdownOnClickOutside);
      }
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/";
    },
},
}
</script>
<style>
.user-profile {
  margin-left: 175px;
}
.profile-img {
    height: 55px;
    border-radius: 50%;
    margin-left: 170%;
    margin-top: -23%;
    cursor: pointer;
}
.profile-name {
  /*width: 300%;*/
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
  margin-left: 35%;
}
@media (max-width: 768px) {
  .search{
    background-color: #fef2f2;
    width: 100%;
  }
  .profile-img {
    border-radius: 50%;
    margin-left: 80%;
    margin-top : -54px;
    cursor: pointer;
  }
  .dropdown-menu {
      margin-left: 50% !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .search{
    background-color: #fef2f2;
    width: 80%;
  }
  .profile-img {
    border-radius: 50%;
    margin-left: 80%;
    margin-top : -54px;
    cursor: pointer;
  }
  .dropdown-menu {
      margin-left: 70% !important;
  }
}


.register-button {
  overflow: hidden;
  position: relative;
  display: inline-block;
}
.membership{
  width: 200px;
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
.premium-button{
  height: 80%!important;

}
.premium-text {
  font-size: 13px !important;
}
.writter p{
  margin-top: 2%;
}
.dropdown-menu {
  display: none;
  margin-left: 100%;
}
.show {
  display: block;
}
</style>
