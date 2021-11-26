<template>
  <div class="learning-wrapper">
    <p class="title">Learning VueJs</p>
    <hr>
    <div class="content">
      <Learning/>
    </div>
  </div>
</template>

<script>
import Learning from '~/components/Learning/Learning'

export default {
  name: 'index',
  components: {
    Learning
  },
  data () {
    return {
      parentName: 'Learning page'
    }
  }
}
</script>

<style scoped>
.learning-wrapper {
}

.title {
  font-size: larger;
  text-align: center;
  font-weight: 800;
}

.content {
  padding: 10px;
}
</style>
