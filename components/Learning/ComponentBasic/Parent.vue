<template>
<div class="parent">
  <p>Parent - component basic</p>
  <button @click="fontSizeChild += 0.1">Click to enlarge the text</button>
  <button @click="fontSizeChild = 1">Reset font size</button>
  <textarea
    v-model="contentFromChild"
    rows="3"
    placeholder="The text from child"
  ></textarea>
  <div class="child">
    <Child
      @contentToParent="onHandleContentFromChild"
      :font-size-text="fontSizeChild"
    />
  </div>
</div>
</template>

<script>
import Child from '~/components/Learning/ComponentBasic/Child'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data () {
    return {
      fontSizeChild: 1,
      contentFromChild: ''
    }
  },
  methods: {
    onHandleContentFromChild (content) {
      this.contentFromChild = content
    }
  }
}
</script>

<style scoped>
.parent {
  width: 100%;
  min-height: 500px;
  background-color: #cccccc;
  border: 1px dashed black;
}
.child {
  width: 300px;
  min-height: 300px;
  background-color: #fff59d;
  border: 1px dashed black;
}
button {
  height: 32px;
  background-color: coral;
  margin: 5px;
  padding: 0 5px;
}
textarea{
  border: 1px solid coral;
  width: 300px;
}
</style>
