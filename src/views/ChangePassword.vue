<template>
  <div>
    <Header />
    <div class="login-container">
      <div class="overlay"></div>
      <div class="login">
        <div class="card account">
          <h5 class="heading">Change Your Password</h5>
          <p></p>
          <div class="form">
            <div class="form-group">
              <input v-model="old_password" type="password" class="form-control" placeholder="Current Password" />
            </div>
            <div class="form-group">
              <input v-model="new_password" type="password" class="form-control" placeholder="New Password" />
            </div>
            <div class="form-group">
              <input
                v-model="confirm_password"
                type="password"
                class="form-control"
                placeholder="Confirm New Password"
              />
            </div>
          </div>
          <p class="text-center">
            <br /><button
              @click="changePassword"
              class="btn btn-primary"
              style="background-color: #ffffff; color: #12cca8"
            >
              Change Password
            </button>
          </p>
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
  components: {
    Header,
  },
  data() {
    return {
      old_password: '',
      new_password: '',
      confirm_password: '',
    }
  },
  methods: {
    async changePassword() {
      // Check if the new password and confirm password match
      if (this.new_password !== this.confirm_password) {
        alert('New password and confirm password must match.')
        return
      }

      // Prepare the data to be sent to the backend
      const requestData = {
        old_password: this.old_password,
        new_password: this.new_password,
      }

      try {
        // Send a POST request to change the password
        const response = await axios.post('https://backend1.mutwarekidtv.xyz/accounts/change-password/', requestData)

        console.log(response.data)
        alert('Password changed successfully!')
      } catch (error) {
        console.error('Error changing password:', error)
        alert('Error changing password. Please try again.')
      }
    },
  },
}
</script>
