<template>
  <div>
    <Header />
    <div class="custom-jumbotron">
      <div class="overly"></div>
      <div class="container">
        <div style="margin-top: 5%;margin-left: 15%;">
          <img :src="require('@/assets/img/mutware_banner.png')" style="margin-left: 10%; margin-top: -5%; width: 60%" />
          <br /><br />
          <h1 class="text-center middle-title">
            <b>LEARN</b> <span>through</span> <b>PLAY</b>
          </h1>
        </div>
        <br />
      </div>
    </div>
    <section class="video-list">
      <div class="container mt-4">
        <div v-if="loading">
          <div class="skeleton-loader">
            <VideoListSkeleton />
          </div>
          <div class="skeleton-loader">
            <VideoListSkeleton />
          </div>
          <div class="skeleton-loader">
            <VideoListSkeleton />
          </div>
        </div>
        <div v-else-if="videos_list.length > 0" class="list-group">
          <router-link
            v-for="(video, index) in videos_list"
            :key="index"
            :to="'/watch/' + video.id"
            class="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <img :src="video.banner" class="img-listing" alt="..." />
              <div class="video-play-loader">
                <span class="play-icon play"><i class="fas fa-play"></i></span>
              </div>
              <div class="w-75">
                <h4 class="mb-1">{{ video.title }}</h4>
                <small>{{ formatDate(video.upload_date) }}</small>
                <p class="mb-1">{{ video.description }}</p> 
                <small>{{ video.view_count }} views</small>
              </div>
            </div>
          </router-link>
        </div>
        <div v-else>No video found</div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from '../components/AppHeader.vue'
import Footer from '../components/AppFooter.vue'
import VideoListSkeleton from '../components/VideoListSkeleton.vue'
import axios from 'axios'
// /* global $, bootstrap */

export default {
  components: {
    Header,
    Footer,
    VideoListSkeleton,
  },
  data() {
    return {
      videos_list: [],
      loading: true,
    }
  },
  mounted() {},
  created() {
    this.get_videos_list()
  },
  methods: {
    get_videos_list() {
      axios
        .get('https://backend1.mutwarekidtv.xyz/videos/?format=json')
        .then((response) => {
          this.videos_list = response.data
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    },
  },
}
</script>
<style>
.play {
  margin-top: 36px;
  margin-left: 30px;
  color: #12cca8;
}
.video-play-loader {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  margin-left: 8%;
  margin-top: 5%;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.video-play-loader span {
  position: relative;
  font-size: 28px;
  top: 2px;
  left: -2px;
}

.video-play-loader::after,
.video-play-loader::before {
  content: '';
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3px;
  left: -3px;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 3px solid #ffffff;
  border-radius: 50%;
  animation-name: ripple;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
  z-index: -1;
}

.video-play-loader::after {
  animation-delay: 0s;
}

.video-play-loader::before {
  animation-delay: 0.5s;
}

@keyframes ripple {
  from {
    opacity: 1;
    transform: scale3d(0.75, 0.75, 1);
  }

  to {
    opacity: 0;
    transform: scale3d(1.5, 1.5, 1);
  }
}
.skeleton-loader {
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom:  12px;
}
.h4,
h4 {
  font-size: 1.5rem;
  font-family: 'Fredoka One', cursive;
  font-weight: 600;
}
.small {
  font-weight:700;
}
.middle-title {
  margin-top: 1%;
  font-family: 'Jockey One',;
  font-weight: 400;
  font-size: 48px;
  color: #FFFDFD;
  line-height: normal;
}
.middle-title span{
  font-family: 'Abhaya Libre';
}
.video-list {
  /*background-color: #fbf9f9;*/
  /*margin-top: -4%;*/
}

@media (max-width: 767px) {
  .list-group-item {
    flex-direction: column;
  }

  .img-listing {
    width: 100%;
    margin-bottom: 10px;
  }

  .video-play-loader {
    order: -1;
    margin: 22% 35%; 
  }
  .d-flex {
    display: grid!important;
  }
}

</style>
