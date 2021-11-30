import Vue from 'vue'

const mixin = {
  data () {
    return {
      message: 'hello from mixin'
    }
  },
  methods: {
    shortMyText (text, n) {
      return text.substr(0, n)
    }
  }
}

Vue.mixin(mixin)
