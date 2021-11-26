<template>
  <div>
    <h3 class="title">Demo slot container</h3>
    <Parent/>
  </div>
</template>

<script>
import Parent from '~/components/Learning/DemoSlot/Parent'

export default {
  name: 'DemoSlotContainer',
  components: {
    Parent
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
