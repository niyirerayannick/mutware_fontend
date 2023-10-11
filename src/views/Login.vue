<template>
  <div>
    <Header />
    <div class="login-container">
      <div class="overlay"></div>
      <div class="login">
        <div class="card account">
          <h5 class="heading">&#128512; Happy to see you again!</h5>
          <p></p>
          <div class="form">
            <label for="exampleFormControlInput1">To continue please log in to mutware tv</label>

            <div class="form-group">
              <input v-model="emailOrPhone" type="text" class="form-control" placeholder="Phone / Email" />
            </div>
            <div class="form-group">
              <input v-model="password" type="password" class="form-control" placeholder="Password" />
            </div>
          </div>
          <p class="text-center">
            <button @click="login" v-if="!loading" type="button" class="btn btn-light" style="color: #12cca8">
              Login
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
// import axios from '../helpers/axios';
import axios from 'axios'

export default {
  name: 'LoginPage',
  components: {
    Header,
  },
  data() {
    return {
      emailOrPhone: '',
      password: '',
      loading: false,
      responseMessage: null,
    }
  },
  created() {},
  methods: {
    async login() {
      try {
        this.loading = true

        const userData = {
          email_or_telephone: this.emailOrPhone,
          password: this.password,
        }
        const response = await axios.post('https://backend1.mutwarekidtv.xyz/accounts/login/?format=json', userData)
        console.log(response);
        // alert(JSON.stringify(response.data.user_info))
        // Assuming your backend sends a token upon successful login
        const token = response.data.token
        localStorage.setItem('user', JSON.stringify(response.data.user_info))
        localStorage.setItem('userToken', token)

        this.$router.push({ name: 'HomeView' });
      } catch (error) {
        console.error('Error during login:', error)

        this.responseMessage = 'Invalid email/phone or password'
      } finally {
        this.loading = false
      }
    },
    clearResponseMessage() {
      this.responseMessage = null
    },
  },
}
</script>
<style>
.middle {
  font-family: 'Fredoka One', cursive;
  font-weight: 600;
  font-size: 50px;
  text-transform: capitalize;
}
.account {
  background-color: #12cca8;
}


.login {
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

/*.login-button {
  color: #000;
  background-color: #fef2f2;
  border-color: #f3d5d5;
  width: 100%;
  max-width: 140px; 
  margin-top: 10px; 
}*/

@media (min-width: 1024px) {
  .login {
    margin-left: 700px;
  }
}


/* Media query for tablets */
@media (max-width: 768px) {
  .login {
    max-width: 100%; 
    margin-top: 35%; 
  }
}

/* Media query for mobile devices */
@media (max-width: 480px) {
  .login-container {
    padding: 40px; 
  }
}

</style>
