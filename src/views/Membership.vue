<template>
  <div>
    <Header />
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-uppercase text-center">Free</h5>
                <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>2 Videos / day
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>5 Podcast / day
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>Ads
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>Limited access on Lessons
                  </li>
                  <li class="text-muted">
                    <span class="fa-li"><i class="fas fa-times"></i></span>Short videos
                  </li>
                </ul>
                <div class="d-grid">
                  <a
                    href="#"
                    class="btn btn-primary btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    >Subscribe</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-5">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-uppercase text-center">Premium</h5>
                <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Videos
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Podcast
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>No Ads
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>Learning
                  </li>
                  <li class="text-muted">
                    <span class="fa-li"><i class="fas fa-times"></i></span>Highlighted videos
                  </li>
                </ul>
                <div class="d-grid">
                  <a
                    href="#"
                    class="btn btn-success btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    >Subscribe</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <label>Phone Number :</label>
              <input type="number" class="form-control" placeholder="" /><br />
              <button onclick="pay()" type="button" id="play-button" class="btn btn-success btn-lg btn-block">
                <span>Pay Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="payment">
      <br />
      <h4>Our Payment Modalities</h4>
      <div>
        <img src="img/airtel.svg" alt="not found" style="width: 5%" />
        <img src="img/mtnmoney22.png" alt="not found" style="width: 5%" /><br />
      </div>
    </div>
    <footer>
      <div class="bg-white text-black text-center py-3">
        <div class="container mt-4">
          <div class="row">
            <div class="col">
              <a class="navbar-brand" href="#">Mutware Kid Logo</a><br /><br />
              <a href="#"> <img src="img/google-play-badge.svg" /> </a><br />
              <a href="#">
                <img src="img/applestore.svg" class="applestore-img" />
              </a>
            </div>
            <div class="col">
              <h2>Watch Every Where On Any Device</h2>
              <p>Get MUTWARE KID TV on your device downoald the App and start watching for <b>FREE</b> TO DAY</p>
            </div>
            <div class="col">
              <a href="stream.html">
                <img src="img/live-stream.png" class="live-streaming-img" />
              </a>
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
                <img src="img/mutwarekid.png" style="height: 270px" />
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
              <img src="logo/Twitter.webp" alt="Twitter Logo" style="width: 12%" />

              <!-- Instagram -->
              <img src="logo/instagram.png" alt="Instagram Logo" style="width: 12%" />

              <img src="logo/facebook.png" alt="Instagram Logo" style="width: 12%" /><br />

              <img src="logo/youtube.png" alt="Instagram Logo" style="width: 44%" />
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
<script>
import Header from '../components/AppHeader.vue'
export default {
  name: 'MembershipPage',
  components: {
    Header,
  },
}
</script>
<style>
section.pricing {
  background: linear-gradient(135deg, #12cca8, #1a6743);
  /*background: #007bff;*/
  /*background: linear-gradient(to right, #0062E6, #33AEFF);*/
}

.pricing .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.pricing hr {
  margin: 1.5rem 0;
}

.pricing .card-title {
  margin: 0.5rem 0;
  font-size: 30px;
  letter-spacing: 0.1rem;
  font-weight: 800;
  font-family: 'Fredoka One', cursive;
  color: #12cca8;
}
.pricing .card-price {
  font-size: 3rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 0.8rem;
}

.pricing ul li {
  margin-bottom: 1rem;
}

.pricing .text-muted {
  opacity: 0.7;
}

.pricing .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
}
h2 {
  font-family: 'Fredoka One', cursive;
  font-weight: 800;
  font-size: 38px;
}
h4 {
  color: #15a27e;
  font-weight: 700;
  font-family: 'Fredoka One', cursive;
}
.payment {
  background-color: #fff8f8;
  text-align: center;
}

/* Hover Effects on Card */

@media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -0.25rem;
    margin-bottom: 0.25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }

  .pricing .card:hover .btn {
    opacity: 1;
  }
}
</style>
