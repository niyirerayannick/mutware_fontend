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

        const response = await axios.post('http://backend.mutwarekidtv.xyz/accounts/login/', userData)
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
</style>
