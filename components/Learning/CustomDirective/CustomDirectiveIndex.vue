<template>
<div>
  <h1>Custom directive index</h1>
  <input v-focus type="text"/>
  <p v-pin:left = '600'>I am pinned onto the page at 200px to the left</p>
</div>
</template>

<script>
export default {
  name: 'CustomDirectiveIndex'
}
</script>

<style scoped>
input {
  width: 500px;
  height: 32px;
  border: 1px solid red;
}
</style>
