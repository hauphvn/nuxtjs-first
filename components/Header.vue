<template>
<div class="header">
  <header>
    <ul class="nav-item">
      <li><nuxt-link to="/">Home</nuxt-link> </li>
      <li><nuxt-link to="/user">User</nuxt-link> </li>
    </ul>
  </header>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header{
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
}
.nav-item {
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
}
.nav-item a {
  text-decoration: none;
}
</style>
