import Vue from 'vue'
import App from './App.vue'
import Card from '@/components/Card';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.component('Card', Card);
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
