import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeAge (age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

new Vue({
  router,
  store,
  // automatically render a template
  render: h => h(App)
}).$mount('#app')
