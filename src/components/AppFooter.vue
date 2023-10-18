<template>
  <div>
    <footer>
      <div class="bg-white text-black text-center py-3">
        <div class="container mt-4">
          <div class="row">
            <div class="col">
              <a href="#">
                <img :src="require('@/assets/img/logo.png')" alt="Twitter Logo" style="width: 100%" /> </a
              ><br /><br />
              <router-link to="/register" class="btn register-button my-2 my-sm-0" type="submit" style="width: 90%; height: 6vh;">Register Now</router-link><br><br>
              <div class="row">
                <div class="col">
                  <a href="#"> <img :src="require('@/assets/img/google-play-badge.svg')" class="playstore-img" /> </a>
                </div>
                <div class="col">
                  <a href="#">
                    <img :src="require('@/assets/img/applestore.svg')" class="applestore-img" />
                  </a>
                </div>
              </div>
              <!-- <div>
                <a href="#"> <img :src="require('@/assets/img/google-play-badge.svg')" /> </a><br />
                <a href="#">
                  <img :src="require('@/assets/img/applestore.svg')" class="applestore-img" />
                </a>
              </div> -->
            </div>
            <div class="col">
              <h2>Every Where On Any Device</h2>
              <p>Get MUTWARE KID TV on your device downoald the App and start restricting for <b>FREE</b> TO DAY</p>
            </div>
            <div class="col">
              <router-link to="/stream">
                <img :src="require('@/assets/img/live-stream.png')" class="live-streaming-img" />
              </router-link>
              <h2>Join Our <b>Live</b> session here</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-pink text-black text-center py-3">
        <div class="container mt-4">
          <div class="row">
            <div class="col">
              <a href="#">
                <img :src="require('@/assets/img/mutwarekid.png')" style="height: 270px" />
              </a>
            </div>
            <div class="col">
              <h2>Our Office</h2>
              <p><i class="fas fa-home me-3 text-secondary"></i> KG 622 St, Kigali</p>
              <p><i class="fas fa-home me-3 text-secondary"></i> RN1, Butare, RW</p>
              <p><i class="fas fa-location me-3 text-secondary"></i> Kigali & Huye</p>
            </div>
            <div class="col">
              <h2>SOCIAL MEDIA</h2>
              <h5>Mutware Educate</h5>
              <!-- Twitter -->
              <a href="https://twitter.com/educate_mutware" target="_blank">
                <img :src="require('@/assets/logo/Twitter.webp')" alt="Twitter Logo" style="width: 12%" />
              </a>
              <!-- Instagram -->
              <a href="https://www.instagram.com/mutwareducate/" target="_blank">
                <img :src="require('@/assets/logo/instagram.png')" alt="Instagram Logo" style="width: 12%" />
              </a>
              <!--  Facebooks-->
              <a href="https://www.facebook.com/people/Mutware-Educate/100080245643472/" target="_blank">
                <img :src="require('@/assets/logo/facebook.png')" alt="Instagram Logo" style="width: 12%" /><br />
              </a>
              <!-- Youtube -->
              <a href="https://www.youtube.com/channel/UCTD8XGuLRkWrLSI-Ffj9Iaw" target="_blank">
                <img :src="require('@/assets/logo/youtube.png')" alt="Instagram Logo" style="width: 44%" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green text-white text-center py-3">
        <p>&copy; 2023 Mutware Kid. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>