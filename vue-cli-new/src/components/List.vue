<template>
  <div class="container">
    <div class="row">
      <h1> Filters & Mixins </h1>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from '../fruitMixin'
export default {
  mixins: [fruitMixin],
  created () {
    console.log('Inside List Created Hook')
  }
}
</script>
