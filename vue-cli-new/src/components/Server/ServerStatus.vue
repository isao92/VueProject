<template lang="html">
<div class="servstat">
    <p>Server Status: {{ status }} </p>
    <button @click="changeStatus">Change</button>
</div>
</template>

<script>
var data = { status: 'Critical' }
export default {
  data: function () {
    return data
  },
  methods: {
    changeStatus: function () {
      this.status = 'Normal'
    }
  }
}
</script>

<style>

</style>
