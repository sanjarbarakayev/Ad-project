import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import * as fb from 'firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: 'AIzaSyDRglTe4BaZgPefB--xDlV-UqdZnXDeOMQ',
      authDomain: 'itc-ads-64a84.firebaseapp.com',
      databaseURL: 'https://itc-ads-64a84.firebaseio.com',
      projectId: 'itc-ads-64a84',
      storageBucket: 'itc-ads-64a84.appspot.com',
      messagingSenderId: '55444955312',
      appId: '1:55444955312:web:2b3a53fb32c182e7efdb75',
      measurementId: 'G-XBCKH25DWX'
    });
  }
}).$mount('#app');