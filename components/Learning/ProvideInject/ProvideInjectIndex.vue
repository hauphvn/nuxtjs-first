<template>
  <div>
    <h1 class="title">Provide/Inject</h1>
    <div class="content">
      <p>Trong trường hợp, ta muốn truyền data từ component cha vào một component con bên trong một component con
        khác sâu bên trong, ta có thể sử dụng <code>props</code>, tuy nhiên cách đó thì gây nhiều phiền tối.
      </p>
      <p>Thay vào đó ta có thể dụng
        <code>Provide/Inject</code>
      </p>
      <hr>
      <AComp/>
    </div>
  </div>
</template>

<script>
import AComp from '~/components/Learning/ProvideInject/AComp'

export default {
  name: 'ProvideInjectIndex',
  components: {
    AComp
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}

code {
  background-color: #ccc;
  border-radius: 2px;
  padding: 0 5px;
}
</style>
