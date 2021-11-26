<template>
  <div>ABC Component
    <hr>
    <p>Gia tri get from A component: {{this.aCompValue}}</p>
  </div>
</template>

<script>
export default {
  name: 'ABCComp',
  inject: ['dataListSize'],
  data () {
    return { aCompValue: 0 }
  },
  created () {
    this.aCompValue = this.dataListSize
  }
}
</script>

<style scoped>

</style>
