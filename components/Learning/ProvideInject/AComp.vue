<template>
  <div>A component
    <button
      style="width: 100px; height: 32px; background-color: #fff59d"
      @click="onAdding"
    >+
    </button>
    <ABComp/>
  </div>

</template>

<script>
import ABComp from '~/components/Learning/ProvideInject/ABComp'

export default {
  name: 'AComp',
  components: {
    ABComp
  },
  data () {
    return {
      aCompDataList: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    onAdding () {
      this.aCompDataList.push(Math.random())
      console.log(this.aCompDataList)
    }
  },
  computed: {
    onCalSize () {
      return this.aCompDataList.length
    }
  },
  provide () {
    return {
      dataListSize: this.onCalSize
    }
  }
}
</script>

<style scoped>

</style>
