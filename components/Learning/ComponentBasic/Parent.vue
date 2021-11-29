<template>
<div class="parent">
<div class="child">
  <p>Parent - component basic</p>
  <button @click="fontSizeChild += 0.1">Click to enlarge the text</button>
  <button @click="fontSizeChild = 1">Reset font size</button>
  <textarea
    v-model="contentFromChild"
    rows="3"
    placeholder="The text from child"
  ></textarea>
</div>
  <div class="child">
    <Child
      @contentToParent="onHandleContentFromChild"
      :font-size-text="fontSizeChild"
    />
  </div>
  <div class="child">
    <p>Element Placement Restrictions</p>
    <table>
      <tr is="vue:TableRow"></tr>
<!--      <TableRow-->
<!--        :content-alert="success"-->
<!--      />-->
    </table>
  </div>
</div>
</template>

<script>
import Child from '~/components/Learning/ComponentBasic/Child'
import TableRow from '~/components/Learning/ComponentBasic/TableRow'

export default {
  name: 'Parent',
  components: {
    Child,
    TableRow
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
  float: left;
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
