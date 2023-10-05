<template>
  <div>
    <Header />
    <section class="home-content">
      <div class="container mt-4">
        <img :src="require('@/assets/img/mutware_banner.png')" style="margin-left: 10%; margin-top: -5%; width: 60%" />
        <br />
        <h1 class="text-center middle-title">
          <b>LEARN</b> <span style="font-family: cursive; color: #ff7c3e">Through</span> <b>PLAY</b>
        </h1>
        <h4><b>Learning</b> is fun with engaging content!</h4>
        <!-- <div id="carouselExampleControls" class="carousel slide"> -->
        <!-- <div v-if="videosList.length > 0">
          <div id="carouselExampleControls" class="carousel slide">
            <div class="carousel-inner home-card-slide">
              <div
                v-for="(video, index) in videosList"
                :key="index"
                :class="{ 'carousel-item': true, active: index === activeIndex }"
              >
                <div class="card">
                  <div class="card-body">
                    <router-link :to="'/watch/' + video.id">
                      <img :src="video.banner" class="d-block w-100" alt="..." />
                      <a :href="'/watch/' + video.id" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" @click="prevSlide">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" @click="nextSlide">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div> -->

        <!-- <div v-if="videosList.length > 0">
          <div id="carouselExampleControls" class="carousel slide">
            <div class="carousel-inner home-card-slide">
              <div
                v-for="(video, index) in videosList"
                :key="index"
                :class="{ 'carousel-item': true, 'active': isActiveSet(index) }"
              >
                <div class="card">
                  <div class="card-body">
                    <router-link :to="'/watch/' + video.id">
                      <img :src="video.banner" class="d-block w-100" alt="..." />
                      <a :href="'/watch/' + video.id" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" @click="prevSlide">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" @click="nextSlide">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div> -->
        <div v-if="loading">
          <ShortSlideSkeleton />
        </div>
        <div v-else-if="videosList.length > 0">
          <div id="carouselExampleControls" class="carousel slide">
            <div class="carousel-inner home-card-slide">
              <div
                v-for="(video, index) in videosList"
                :key="index"
                :class="{ 'carousel-item': true, active: isActive(index) }"
              >
                <div class="card">
                  <div class="card-body">
                    <router-link :to="'/watch/' + video.id">
                      <img :src="video.banner" class="d-block w-100" alt="..." />
                      <a :href="'/watch/' + video.id" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
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
    </section>
    <div class="navbar navbar-green">
      <router-link to="/video-list" class="navbar-brand">
        <h4>Lessons</h4>
      </router-link>
      <router-link to="/video-list" class="navbar-brand">
        <h5>View All <i class="fa fa-chevron-down"></i></h5>
      </router-link>
    </div>
    <section class="lessons">
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <div class="items">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/number'">
                        <img :src="require('@/assets/img/numberskid.png')" class="d-block w-100" alt="..." />
                        <a :href="'/category/number'" class="play-icon">
                          <i class="fas fa-play"></i>
                        </a>
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
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/myhome'">
                        <img :src="require('@/assets/img/muhouse-01.png')" class="d-block w-100" alt="..." />
                        <a :href="'/category/myhome'" class="play-icon">
                          <i class="fas fa-play"></i>
                        </a>
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
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/alphabetic'">
                        <img :src="require('@/assets/img/alphabestkids-01.png')" class="d-block w-100" alt="..." />
                        <a :href="'/category/alphabetic'" class="play-icon">
                          <i class="fas fa-play"></i>
                        </a>
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
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <router-link :to="'/category/myfamiy'">
                        <img :src="require('@/assets//img/puzzle-01.jpg')" class="d-block w-100" alt="..." />
                        <a :href="'/category/myfamiy'" class="play-icon">
                          <i class="fas fa-play"></i>
                        </a>
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
                v-for="(video, index) in videosList"
                :key="index"
                :class="{ 'carousel-item': true, active: isActive(index) }"
              >
                <div class="card-explore">
                  <div class="card-body">
                    <router-link :to="'/watch/' + video.id">
                      <img :src="video.banner" class="d-block w-100 h-vh" alt="..." />
                      <a :href="'/watch/' + video.id" class="play-icon">
                        <i class="fas fa-play"></i>
                      </a>
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
    </section>
    <!-- <div class="container"> -->

    <!-- </div> -->

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
/* eslint-disable no-redeclare */

import Header from '../components/AppHeader.vue'
import Footer from '../components/AppFooter.vue'
import ShortSlideSkeleton from '../components/ShortSlideSkeleton.vue'
// import $ from 'jquery'

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
  mounted() {},
  created() {
    this.get_videos_list();
  },
  methods: {
    get_videos_list() {
      axios
        .get('http://backend.mutwarekidtv.xyz/videos/?format=json')
        .then((response) => {
          this.videosList = response.data
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
        })
      // .finally(() => {
      //   this.loading = false;
      // });
    },
    // isActiveSet(index) {
    //   const start = this.activeIndex * 4 // Assuming you want to show 4 cards at a time
    //   return index >= start && index < start + 4
    // },
    isActive(index) {
      return index >= this.activeIndex && index < this.activeIndex + 4
    },
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.videosList.length) % this.videosList.length
    },
    nextSlide() {
      // this.activeIndex = (this.activeIndex + 1) % this.videosList.length
      const lastIndex = this.videosList.length - 1
      if (this.activeIndex < lastIndex - 3) {
        this.activeIndex++
      } else {
        this.activeIndex = 0 // Loop back to the first card
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
.h4,
h4 {
  font-size: 1.8rem;
  font-family: 'Fredoka One', cursive;
  font-weight: 900;
}
.carousel-control-prev, .carousel-control-next{
  border:1px solid #e3989f;
}
.middle-title {
  font-family: 'Fredoka One', cursive;
  font-weight: 600;
  font-size: 50px;
  text-transform: capitalize;
}
</style>
