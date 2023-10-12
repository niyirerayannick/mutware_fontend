<template>
  <div>
    <Header />

    <section class="live-stream">
      <div class="container mt-4">
        <router-link :to="'/watch/2'">
          <img :src="require('@/assets/img/play.png')" style="width: 50%; margin-left: 25%" />
        </router-link>
        <span class="play-text">Just <b>Click</b>, It's Educatve and Fun! </span>
      </div>
    </section>

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
    <div class="navbar navbar-green">
      <a class="navbar-brand" href="#">
        <h4>Streamed Sessions</h4>
      </a>
      <a class="navbar-brand" href="#">
        <h5>View All <i class="fa fa-chevron-down"></i></h5>
      </a>
    </div>
    <section class="streamed-session">
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <img :src="require('@/assets/img/alphabestkids-01.png')" class="d-block w-100" alt="..." />
                      <a href="#" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><b>Parent's advice</b></h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <img :src="require('@/assets/img/alphabestkids-01.png')" class="d-block w-100" alt="..." />
                      <a href="#" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title">Teacher's Support</h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <img :src="require('@/assets/img/puzzle-01.jpg')" class="d-block w-100" alt="..." />
                      <a href="#" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title">Help Siblings</h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <img :src="require('@/assets/img/muhouse-01.png')" class="d-block w-100" alt="..." />
                      <a href="#" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title">Life Skills</h5>
                  <p>The show is centered on a group of puppies led by an adult mentor named.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  name: 'StreamPage',
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
}
</script>
<style>
  .carousel-item {
    display: none;
  }

  .carousel-item.active {
    display: block;
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