<template>
  <div>
    <Header />
    <div class="register-container">
      <div class="overlay"></div>
      <div class="register">
        <div class="account">
          <h5 class="heading">Create an account</h5>
          <div class="form">
            <div class="form-group">
              <label for="exampleFormControlInput1">Parent's first and last name</label>
              <input v-model="parentFullName" type="text" class="form-control" placeholder="Parent full names" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Your email address to confirm your account</label>
              <input v-model="emailAddress" type="text" class="form-control" placeholder="Email address" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Your phone number to confirm your account</label>
              <input v-model="phoneNumber" type="text" class="form-control" placeholder="Phone" />
            </div>
            <label for="exampleFormControlInput1"
              >Set a password that will be used to access your Mutware Kid Tv account</label
            >
            <div class="row">
              <div class="col">
                <input v-model="password" type="password" class="form-control" placeholder="Password" />
              </div>
              <div class="col">
                <input v-model="confirmPassword" type="password" class="form-control" placeholder="Confirm Password" />
              </div>
            </div>
            <div class="form-check mb-2">
              <br />
              <input v-model="agreePrivacyPolicy" class="form-check-input" type="checkbox" id="autoSizingCheck" />
              <label class="form-check-label" for="autoSizingCheck"> Agree our privacy policy <b>Here</b> </label>
            </div>
          </div>
          <p class="text-center">
            <button
              @click="user_registration"
              v-if="!loading"
              type="button"
              class="btn btn-light"
              style="color: #12cca8"
            >
              Register
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
  name: 'RegisterPage',
  components: {
    Header,
  },
  data() {
    return {
      parentFullName: '',
      emailAddress: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      agreePrivacyPolicy: false,
      loading: false,
      responseMessage: null,
    }
  },
  methods: {
    async user_registration() {
      this.loading = true
      try {
        if (!this.agreePrivacyPolicy) {
          this.responseMessage = 'Please agree to the privacy policy.'
          this.loading = false
          return
        }
        if (this.password !== this.confirmPassword) {
          this.responseMessage = 'Passwords do not match.'
          this.loading = false
          return
        }
        const userData = {
          email: this.emailAddress,
          telephone: this.phoneNumber,
          password: this.password,
          full_name: this.parentFullName,
        }
        // Send a POST request to your API
        const response = await axios.post('https://backend1.mutwarekidtv.xyz/accounts/register/?format=json', userData)
        console.log(response.data)
        this.responseMessage = 'Registration successful!'
        setTimeout(() => {
          this.responseMessage = null
          this.$router.push({ name: 'LoginPage' })
        }, 2000)
        this.loading = false
        } catch (error) {
          console.error(error.response.data);
          this.loading = false;
          if (error.response.data.email && error.response.data.telephone) {
            this.responseMessage = "Email and Phone Number are already taken.";
          } else if (error.response.data.email) {
            this.responseMessage = "Email is already taken.";
          } else if (error.response.data.telephone) {
            this.responseMessage = "This Phone is already taken.";
          } else {
            this.responseMessage = "An error occurred. Please try again.";
          }
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
</style>
