<template>
  <div>
    <h1 style="text-align: center">ADMIN DASHBOARD</h1>
    <h2 style="text-align: center"><nuxt-link to="/">Home</nuxt-link></h2>
    <Nuxt/>
  </div>
</template>
<script>

export default {
  middleware: 'auth',
  components: {
  },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
}
</style>
