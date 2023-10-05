import axios from 'axios'

const token = localStorage.getItem('token')
let ApiUrl = ''
if (window.location.origin.includes('localhost')) {
  // ApiUrl = 'http://localhost:8000/';
  ApiUrl = 'http://backend.mutwarekidtv.xyz/'
} else {
  ApiUrl = 'http://backend.mutwarekidtv.xyz/'
  // ApiUrl = 'https://joblinkapi.strongmind.rw/';
}
const instance = axios.create({
  baseURL: ApiUrl,
  headers: {
    Authorization: 'Bearer ' + token, // set the token here
  },
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      // window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

export default instance
