<template>
  <div>
    <Header />
    <section class="home-content">
      <div class="container mt-4">
        <img :src="require('@/assets/img/mutware_banner.png')" style="margin-left: 10%; margin-top: -5%; width: 70%" />
        <h1 class="text-center middle-title">
          <b>LEARN</b> <span>through</span> <b>PLAY</b>
        </h1>
        <h4 class="learn"><b>Learning</b> is fun with engaging content!</h4>
        <div>
          <div v-if="loading">
            <ShortSlideSkeleton />
          </div>
          <div v-else-if="videosList.length > 0">
            <div id="carouselExampleControls" class="carousel slide">
              <div class="carousel-inner home-card-slide">
                  
                  <div
                    v-for="(video, index) in getVisibleVideos()"
                    :key="index"
                    :class="{ 'carousel-item': true, active: isActive(index) }"
                  >
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/watch/' + video.id">
                        <img :src="video.banner" class="d-block w-100" alt="..." />
                        <div class="video-play-loaders">
                          <span class="play-icon play"><i class="fas fa-play"></i></span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" @click="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
              </button>
              <button class="carousel-control-next" type="button" @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
              </button>
            </div>
          </div>
          <div v-else>No videos available.</div>
        </div>
      </div>
    </section>
    <div class="navbar navbar-green">
      <router-link to="/video-list" class="navbar-brand">
        <h4>Lessons</h4>
      </router-link>
      <router-link to="/video-list" class="navbar-brand">
        <h4>View All <i class="fa fa-chevron-down"></i></h4>
      </router-link>
    </div>
    <section class="lessons">
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6 categories">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/number'">
                        <img :src="require('@/assets/img/numberskid.png')" class="d-block w-100" alt="..." />
                        <div class="video-play-loaders">
                          <span class="play-icon play"><i class="fas fa-play"></i></span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><b>Numbers</b></h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6 categories">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/myhome'">
                        <img :src="require('@/assets/img/muhouse-01.png')" class="d-block w-100" alt="..." />
                        <div class="video-play-loaders">
                          <span class="play-icon play"><i class="fas fa-play"></i></span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title">My Home</h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6 categories">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/alphabetic'">
                        <img :src="require('@/assets/img/alphabestkids-01.png')" class="d-block w-100" alt="..." />
                        <div class="video-play-loaders">
                          <span class="play-icon play"><i class="fas fa-play"></i></span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title">Alphabets</h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6 categories">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/myfamiy'">
                        <img :src="require('@/assets//img/puzzle-01.jpg')" class="d-block w-100" alt="..." />
                        <div class="video-play-loaders">
                          <span class="play-icon play"><i class="fas fa-play"></i></span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title">M Family</h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="navbar navbar-green">
      <router-link to="/video-list" class="navbar-brand">
        <h4>Explore More here</h4>
      </router-link>
    </div>
    <section class="more-video">
      <div class="container mt-4">
        <div v-if="loading">
          <ShortSlideSkeleton />
        </div>
        <div v-else-if="videosList.length > 0">
          <div id="carouselExampleControls" class="carousel">
            <div class="carousel-inner">
              <div
                v-for="(video, index) in getVisibleVideos()"
                :key="index"
                :class="{ 'carousel-item': true, active: isActive(index) }"
              >
                <div class="card-explore">
                  <div class="card-body">
                    <router-link :to="'/watch/' + video.id">
                      <img :src="video.banner" class="d-block w-100 h-vh" alt="..." />
                      <div class="video-play-loaders">
                        <span class="play-icon play"><i class="fas fa-play"></i></span>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" @click="prevSlide">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden"></span>
            </button>
            <button class="carousel-control-next" type="button" @click="nextSlide">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden"></span>
            </button>
          </div>
        </div>
        <div v-else>No videos available.</div>
        <center>
          <router-link :to="'video-list'" class="button-73" role="button">
            Explore More
          </router-link>
          <!-- <button class="button-73" role="button">Explore More</button> -->
        </center>
      </div>
    </section>
    <!-- <div class="container"> -->

    <!-- </div> -->

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/AppHeader.vue'
  import Footer from '../components/AppFooter.vue'
  import ShortSlideSkeleton from '../components/ShortSlideSkeleton.vue'
  import axios from 'axios'

  export default {
    name: 'HomeView',
    components: {
      Header,
      Footer,
      ShortSlideSkeleton,
    },
    data() {
      return {
        videosList: [],
        activeIndex: 0,
        loading: true,
      }
    },
    computed: {
      slidesToShow() {
        return window.innerWidth < 576 ? 1 : 4; 
      },
    },
    created() {
      this.user = JSON.parse(localStorage.getItem('user'));
      // alert(JSON.stringify(this.user))
      this.get_videos_list();
    },
    methods: {
      get_videos_list() {
        axios
          .get('https://backend1.mutwarekidtv.xyz/videos/?format=json')
          .then((response) => {
            this.videosList = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      getVisibleVideos() {
        const start = this.activeIndex;
        const end = start + this.slidesToShow;
        return this.videosList.slice(start, end);
      },
      isActive(index) {
        return index >= 0 && index < this.slidesToShow;
      },
      prevSlide() {
        this.activeIndex = (this.activeIndex - this.slidesToShow + 1 + this.videosList.length) % this.videosList.length;
      },
      
      nextSlide() {
        const lastIndex = this.videosList.length - 1;
        this.activeIndex = (this.activeIndex + 1) % this.videosList.length;

        if (this.activeIndex > lastIndex - (this.slidesToShow - 1)) {
          this.activeIndex = 0;
        }
      },

    },
  };
</script>

<style>
.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}
.h4,
h4 {
  margin-top : 3%;
  margin-left: 3%;
  font-size: 1.8rem;
  font-family: 'Jockey One', sans-serif;
}
.carousel-control-prev, .carousel-control-next{
  border:1px solid #e3989f;
}
.card {
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
@media (max-width: 576px) {
  .carousel-inner .carousel-item {
    display: flex;
    flex: 0 0 100%;
  }
  .middle-title {
    margin-top: 1%;
    font-family: 'Jockey One', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #FFFDFD;
    line-height: normal;
  }
  h4 {
    font-size: 14px;
    text-align : center;
  }
}
/*@media (min-width: 768px) {
  .button-73 {
    font-size: 1.5rem;
    padding: .75rem 2rem;
  }
}
*/
.row {
  margin-left: 0px;
}
.categories {
  margin-left: -8%;
}


.play {
  margin-top: 36px;
  margin-left: 30px;
  color: #12cca8;
}

.video-play-loaders {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  width: 3em;
  left: 45%;
  top: 50%;
  margin-left: -1em;
  margin-top: -1em;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.video-play-loaders span {
  position: relative;
  font-size: 1.8em;
  top: 3px;
  left: -2px;
}

.video-play-loaders::after,
.video-play-loaders::before {
  content: '';
  opacity: 0;
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

.video-play-loaders::after {
  animation-delay: 0s;
}

.video-play-loaders::before {
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



.button-73 {
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 40em;
  border-style: none;
  box-shadow: #ADCFFF 0 -12px 6px inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -.24px;
  margin: 0 auto;
  outline: none;
  padding: 1rem 1.3rem;
  quotes: auto;
  text-align: center;
  text-decoration: none;
  transition: all .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}


.button-73:hover {
    background-color: #12cca8;
    box-shadow: #94ecdc 0 -6px 8px inset;
    transform: scale(1.125);
    text-decoration: none;
    color: #fff;
} 

.button-73:active {
  transform: scale(1.025);
}
  

</style>
