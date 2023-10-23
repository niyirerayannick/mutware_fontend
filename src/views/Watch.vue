<template>
  <div style="background-color:#eeeeee;">
    <Header />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">

        
          <div id="video-container" v-if="videoDetails">
            <div v-if="!isVideoPlaying" class="request-loader" @click="playVideo">
              <span class="play-icon play"><i class="fas fa-play"></i></span>
            </div>
            <video
              v-if="videoDetails"
              id="myVideo"
              ref="videoPlayer"
              class="img-fluid"
              controls
              @play="handlePlay"
              @pause="handlePause"
              @timeupdate="checkVideoTime"
            >
              <source :src="videoDetails.video_file" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body content-desc">
              <h5 class="card-title">{{ videoDetails.title }}</h5>
              <p class="card-text">{{ videoDetails.description }} </p>
              <img :src="videoDetails.banner" class="d-block w-100 banner" alt="..." />
            </div>
          </div>
        </div>
      </div><br><br>
      <!-- <div class="row"> -->
        <h2>Related Videos</h2>
        <div class="carousel">
          <div class="row">
            <div v-for="relatedVideo in relatedVideos" :key="relatedVideo.id" class="col-md-3">
              <div class="carousel-item active">
                <div class="card">
                  <div class="card-body">
                    <a :href="'/watch/' + relatedVideo.id">
                      <img :src="'https://backend1.mutwarekidtv.xyz/' + relatedVideo.banner" class="d-block w-100 related-video"  alt="..." />
                      <a :href="'/watch/' + relatedVideo.id" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      <!-- </div> -->
      <center>
        <div class="item button-typewriter" style="--bg-color: #e74c3c">
          <div class="button__wrapper">
            <router-link :to="'/video-list'" class="explore-button" role="button">
              <p>Explore More</p>
            </router-link>
          </div>
        </div>
      </center><br>
      <div v-if="isModalVisible" class="custom-modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h4 class="watch-message">Thanks for visiting Mutware Kid TV, you are welcome but you are in guest mode, REGISTER to continue!!</h4><br>

          <div class="modal-footer">
            <!-- <button class="btn btn-secondary" @click="closeModal">Close</button> -->
            <div class="item button-pulse" style="--bg-color: #e67e22;margin:auto;">
              <div class="button__wrapper">
                <div class="pulsing"></div>
                <router-link to="/register" class="waving-button" type="submit">REGISTER</router-link>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
  import Header from '../components/AppHeader.vue'
  import Footer from '../components/AppFooter.vue'
  import axios from 'axios'

  export default {
    name: 'WatchPage',
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        videoDetails: '',
        isVideoPlaying: false,
        relatedVideos: [],
        popupVisible: false,
        isModalVisible: false,
        isPopupShown: false,
        lastPopupTime: 0,
        pauseStartTime: 0,
      }
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.playVideo();
      });
    },
    created() {
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    mounted() {
      this.loadVideoDetails();
      this.playVideo();
    },
    beforeRouteUpdate(to, from, next) {
      this.loadVideoDetails(); 
      next();
    },
    methods: {
      async loadVideoDetails() {
        try {
          const videoId = this.$route.params.id;
          const response = await axios.get(`https://backend1.mutwarekidtv.xyz/video/${videoId}/watch/`)
          this.videoDetails = response.data.video_details;
          this.relatedVideos = response.data.related_videos;
        } catch (error) {
          console.error('Error loading video details:', error)
        }
      },
      openModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
        const videoPlayer = this.$refs.videoPlayer;
        if (videoPlayer) {
          videoPlayer.play();
        }
      },
      formatDate(dateString) {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const day = ('0' + date.getDate()).slice(-2)
        return `${year}/${month}/${day}`
      },
      playVideo() {
        const videoPlayer = this.$refs.videoPlayer
        if (videoPlayer) {
          if (videoPlayer.paused) {
            videoPlayer.play()
          } else {
            videoPlayer.pause()
          }
        }
      },
      handlePlay() {
        this.isVideoPlaying = true;
        this.isPopupShown = false;
        this.pauseStartTime = 0;
      },
      handlePause() {
        this.isVideoPlaying = false;
        this.pauseStartTime = Math.round(this.$refs.videoPlayer.currentTime);
      },
      showPopup() {
        const videoPlayer = this.$refs.videoPlayer;
        if (videoPlayer) {
          videoPlayer.pause();
        }
        this.openModal();
        this.isPopupShown = true;
        this.lastPopupTime = Math.round(videoPlayer.currentTime);
      },
      checkVideoTime() {
        if (this.videoDetails && this.$refs.videoPlayer && this.user && this.user.username === 'Guest') {
          const videoPlayer = this.$refs.videoPlayer;
          const currentTime = Math.round(videoPlayer.currentTime);

          if (this.isVideoPlaying) {
            if (currentTime % 30 === 0 && currentTime !== this.lastPopupTime) {
              this.showPopup();
            }
          }

          // Check if the video is paused
          if (!this.isVideoPlaying && this.pauseStartTime > 0) {
            if ((currentTime - this.pauseStartTime) >= 30) {
              this.showPopup();
            }
          }
        }
      },

    },
  }
</script>

<style>
  #video-container {
    position: relative;
  }

  #video-controls {
    /*position: absolute;*/
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  #video-controls button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  #video-controls button:hover {
    color: #17a2b8;
  }

  input[type='range'] {
    width: 100%;
  }
  .custom-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
  .video-container {
    position: relative;
    display: inline-block;
  }

  .card {
    background-color: #f7f7f7;
    border-radius: 15px;
  }
  .card-body img{
    border-radius: 10px;
  }
  .card-body {
    padding: 0.7rem;
    max-height: 96%;
    overflow: hidden;
    position: relative;
  }
  .content-desc{
    height: 64vh;
  }
  .banner {
    height: 33vh;
  }
  .related-video{
    height: 26vh;
  }

  .img-fluid {
    width: 100%;
  }
  .play {
    margin-top: 36px;
    margin-left: 30px;
    color: #12cca8;
  }
  .request-loader {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
    margin-left: 45%;
    margin-top: 20%;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .request-loader span {
    position: relative;
    font-size: 28px;
    top: 2px;
    left: -2px;
  }

  .request-loader::after,
  .request-loader::before {
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
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
    z-index: -1;
  }

  .request-loader::after {
    animation-delay: 0s;
  }

  .request-loader::before {
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
  .carousel {
    margin-bottom: 50px;
  }
  .col-md-3 {
    padding-right: 0px;
    padding-left: 0px;
  }


  /*modal*/
  .custom-modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #66AFBC;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 470px;
    width: 100%;
  }

  .modal-footer{
    border-top: 1px solid #66AFBC;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .watch-message {
    color: #fff;
    font-family: Inter;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    line-height: 1.4;
    margin-top: 12px;
  }
  /*.button-pulse .waving-button{
    width: 110% !important;
    height: 90% !important;
  }
  .pulsing:before, .pulsing:after{
    width: 110% !important;
    height: 90% !important;
  }*/
</style>  
