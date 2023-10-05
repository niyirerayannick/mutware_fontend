// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


import router from './router'

app.use(router)

app.mount('#app')



// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue@2/dist/bootstrap-vue.css';
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { BootstrapVue } from 'bootstrap-vue'

// const app = createApp(App)
// app.use(router)
// app.use(BootstrapVue)
// app.mount('#app')

