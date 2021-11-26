<template>
  <div>
    <div>
      <Child>
        <!--        <span class="green">{{ item }}</span>-->
        <template v-slot:default>
          <p>This is text from parent input to default slot</p>
        </template>
        <template v-slot:notes>
          <p>This is a text for notes slot from parent</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus excepturi, facilis harum molestiae
            nisi odit perferendis quas sunt temporibus velit voluptates voluptatibus! Blanditiis facilis hic maxime
            provident, recusandae rerum? </p>
        </template>
        <template v-slot:dataListSlot="items">
          <span class="green">{{ items.item }}</span>
        </template>
      </Child>
    </div>
    <div>
      <Child v-slot="{desTructuingSlot}">
        <span>{{ desTructuingSlot }}</span>
      </Child>
    </div>
  </div>
</template>

<script>
import Child from '~/components/Learning/DemoSlot/Child'

export default {
  name: 'Parent',
  components: {
    Child
  }
}
</script>

<style scoped>
.green {
  color: green;
  font-weight: bold;
}
</style>
