<template>
  <div class="component">
      <h3> You may view the user Details here </h3>
      <p>Many Details</p>
      <p>User Name: {{ switchName() }}</p>
      <p>User Age: {{ userAge }}</p>
      <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  props: {
    name: {
      type: String
    },
    userAge: Number
  },
  methods: {
    switchName () {
      return this.name.split('').reverse().join('')
    },
    resetName () {
      this.name = 'John'
      this.$emit('nameWasReset', this.name)
    }
  },
  created () {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age
    })
  }
}
</script>

<style scoped>
  div {
      background-color: lightcoral;
  }
</style>
