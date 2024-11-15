<template>
  <div>
    <Header />
    <div class="register-container">
      <div class="overlay"></div>
      <div class="register">
        <div class="account">
          <h5 class="heading">My Profile</h5>
          <div class="form">
            <div class="form-group">
              <label for="exampleFormControlInput1">Full Names</label>
              <input v-model="parentFullName" type="text" class="form-control" placeholder="Parent full names" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input v-model="emailAddress" type="text" class="form-control" placeholder="Email address" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Phone number</label>
              <input v-model="phoneNumber" type="text" class="form-control" placeholder="Phone" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Number of children</label>
              <input type="number" class="form-control" placeholder="4" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Profile image</label>
              <input type="file" class="form-control" placeholder="profile-img" />
            </div>
          </div>
          <p class="text-center">
            <button
              @click="update_profile"
              v-if="!loading"
              type="button"
              class="btn btn-light"
              style="color: #12cca8"
            >
              Update Profile
            </button>
            <button v-if="loading" class="btn btn-light">
              Processing
              <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </p>
          <div v-if="responseMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>{{ responseMessage }}</strong>
            <button @click="clearResponseMessage" type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/AppHeader.vue'
import axios from 'axios'
export default {
  name: 'ProfilePage',
  components: {
    Header,
  },
  data() {
    return {
      parentFullName: '',
      emailAddress: '',
      phoneNumber: '',
      loading: false,
      responseMessage: null,
      user: {
        names: ''
      }
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.parentFullName = this.user.names || '';
    this.emailAddress = this.user.email || '';
    this.phoneNumber = this.user.phone || '';
  },
  methods: {
    async update_profile() {
      this.loading = true;
      try {
        const userData = {
          names: this.parentFullName,
          email: this.emailAddress,
          phone: this.phoneNumber,
        };
        // Send a POST request to your API
        const response = await axios.post('https://backend.mutwarekidtv.xyz/accounts/profile/updates/?format=json', userData);
        console.log(response.data);
        this.responseMessage = 'Profile updated successfully!';
        setTimeout(() => {
          this.responseMessage = null;
        }, 2000);
      } catch (error) {
        console.error(error.response.data);
        this.loading = false;
      }
    },

    clearResponseMessage() {
      this.responseMessage = null
    },
  },
}
</script>
<style>
.spinner-border {
  width: 1.4em;
  height: 1.4em;
  animation: spinner-border 0.5s linear infinite;
}
.text-success {
  color: #12cca8 !important;
}

.register {
  background: #12cca8;
  color: white;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  width: 100%;
  max-width: 400px; 
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto; 
  position: relative;
  z-index: 2; 
}

@media (min-width: 1024px) {
  .register {
    margin-left: 700px;
  }
}


/* Media query for tablets */
@media (max-width: 768px) {
  .register {
    max-width: 100%; 
    margin-top: -5%; 
  }
}

/* Media query for mobile devices */
@media (max-width: 480px) {
  .register-container {
    padding: 40px; 
  }
}
a {
  color: #fff;
}
a:hover{
  text-decoration: none;
  color: #fef2f2;
}
</style>
