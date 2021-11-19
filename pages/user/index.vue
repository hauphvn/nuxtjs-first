<template>
<div>
  <h1>This is index page of user folder..</h1>
  <a href="/">Home with a tag</a> <br>
  <nuxt-link to="/">Home with nuxt link</nuxt-link>
  <input v-model="userId" type="text" placeholder="enter user id">
  <button @click="onLoadUserById">Load user</button>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUserById () {
      this.$router.push('/user/' + this.userId)
    }
  },
  layouts: 'users'
}
</script>

<style scoped>

</style>
