<template>
<div>
  <h1>This is a single user with ID: {{$route.params.id}}</h1>
  <a href="/">Home</a>
</div>
</template>

<script>
export default {
  name: 'index',
  validate (data) {
    console.log('data: ', data)
    return /^\d+$/.test(data.params.id)
  },
  layouts: 'users'
}
</script>

<style scoped>

</style>
