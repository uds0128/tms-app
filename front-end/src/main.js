import Vue from 'vue'
import App from './App.vue'
import '../node_modules/admin-lte/dist/css/alt/adminlte.core.min.css'
import '../node_modules/admin-lte/dist/css/alt/adminlte.components.min.css'
import '../node_modules/toastr/build/toastr.min.css'
import '../node_modules/admin-lte/dist/css/alt/adminlte.extra-components.min.css'
import 'vue-search-select/dist/VueSearchSelect.css'
import '../node_modules/admin-lte/dist/js/adminlte.min'
// import { fab } from '../node_modules/@fortawesome/free-brands-svg-icons'
// import { fab } from '../node_modules/@fortawesome/free-regular-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinus,faXmark,faTrashCan, faPen, faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(FaRegular);
library.add(faMinus);
library.add(faXmark);
library.add(faTrashCan);
library.add(faPen);
library.add(faEye);
library.add(faFilePdf);


import router from './router'


Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('pagination', require('laravel-vue-pagination'));

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
