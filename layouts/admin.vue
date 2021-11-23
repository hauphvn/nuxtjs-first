<template>
  <div style="text-align: center">
    <h1>ADMIN DASHBOARD</h1>
    <h2><nuxt-link to="/">Home</nuxt-link></h2>
    <AppButton
      type="button"
      @click="onLogout">Logout</AppButton>
    <Nuxt/>
  </div>
</template>
<script>

import AppButton from '~/components/UI/AppButton'

export default {
  middleware: ['check-auth', 'auth'],
  components: {
    AppButton
  },
  data () {
    return {
      displaySidenav: false
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
}
</style>
