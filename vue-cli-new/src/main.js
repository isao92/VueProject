import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    // el.style.backgroundColor = binding.value
    var delay = 0
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

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
