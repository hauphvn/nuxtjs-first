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
  methods: {
    focusInput () {
      this.$refs.input.focus()
    }
  },
  created () {
    console.log('check existed input on created(): ', this.$refs.input)
  },
  mounted () {
    console.log('check existed input on mounted(): ', this.$refs.input)
    this.$refs.input.value = 'hauphvn'
  }
}
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  width: 500px;
}
</style>
