<template>
  <div>
    <slot><p class="default-content">This is default content when have not anything is passed</p></slot>
    <div class="notes">
      <slot name="notes"></slot>
    </div>
    <hr>
    <!-- Multiple slot-->
    <div>
      <br>
      <h4>Scoped slots</h4>
      <ul>
        <li v-for="(item, index) in childListData" :key="index">
          <slot name="dataListSlot" :item="item" :index="index" :another-attribute="anotherAttribute"></slot>
        </li>
      </ul>
    </div>
    <div>
      <hr>
      <h4>Destructuring slot props</h4>
      <ul>
        <li v-for="(item,index) in childListData" :key="index">
          <slot :desTructuingSlot="item"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      childListData: [
        '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa cumque dolorem doloremque enim est ex exercitationem fugit id illo labore libero maxime, modi, numquam officia omnis provident quasi quia tenetur!',
        '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa cumque dolorem doloremque enim est ex exercitationem fugit id illo labore libero maxime, modi, numquam officia omnis provident quasi quia tenetur!',
        '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa cumque dolorem doloremque enim est ex exercitationem fugit id illo labore libero maxime, modi, numquam officia omnis provident quasi quia tenetur!',
        '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Culpa cumque dolorem doloremque enim est ex exercitationem fugit id illo labore libero maxime, modi, numquam officia omnis provident quasi quia tenetur!'
      ]
    }
  }
}
</script>

<style scoped>
.default-content {
  text-align: center;
  color: red;
}

.notes {
  border-radius: 5px;
  background-color: #fff59d;
  padding: 5px;
}
</style>
