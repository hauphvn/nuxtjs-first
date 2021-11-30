import Vue from 'vue'

Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  }
})

Vue.directive('pin', {
  inserted (el, binding) {
    el.style.position = 'fixed'
    const s = binding.arg || 'top'
    el.style[s] = binding.value + 'px'
  }
})
