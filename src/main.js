import Vue from 'vue'
import App from './App.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import './css/app.css'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(VueMoment, {
  moment,
})

Vue.config.productionTip = false

library.add(fas, faYoutube)

new Vue({
  render: h => h(App),
}).$mount('#app')
