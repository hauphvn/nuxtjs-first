<template>
  <div>
    <p>Child - component basic</p>
    <p :style="{fontSize: fontSizeText + 'em'}">This text will change size when parent's button is clicked</p>
    <input
      v-model="contentToParent"
      type="text"
      placeholder="Content to parent..."
    />
    <button @click="onSendToParent">Send to parent</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    fontSizeText: {
      type: Number,
      default: 1
    }
  },
  // emits: ['contentToParent'],
  data () {
    return {
      contentToParent: ''
    }
  },
  methods: {
    onSendToParent () {
      return this.$emit('contentToParent', this.contentToParent)
    }
  }
}
</script>

<style scoped>
/** {*/
/*  box-sizing: border-box;*/
/*}*/
button {
  height: 32px;
  background-color: coral;
  margin: 5px;
  padding: 0 5px;
}

input {
  border: 1px solid black;
  width: 90%;
  height: 32px;
  margin: 5px;
  padding: 0 5px;
  display: inline-block;
}
</style>
