<template>
  <div>
    <h1>Template Refs Index</h1>
    <input
      ref="input"
      type="text"
      placeholder="input..."
    >
  </div>
</template>

<script>
export default {
  name: 'TemplateRefsIndex',
  data () {
    return {
      bar: 'def',
      message1: 'hello from comp'
    }
  },
  methods: {
    focusInput () {
      this.$refs.input.focus()
    }
  },
  created () {
    console.log('data: ', this.$data)
  },
  mounted () {
    const text = 'hauphvn@gmail.com'
    this.$refs.input.value = this.shortMyText(text, 5)
  }
}
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  width: 500px;
}
</style>
