<template>
  <div>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    contentAlert: {
      validator (value) {
        return ['success', 'warning', 'danger'].includes(value)
      }
    }
  }
}
</script>

<style scoped>

</style>
