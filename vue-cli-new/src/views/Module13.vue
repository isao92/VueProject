<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1> Filters & Mixins </h1>
        <p> {{ text | toUppercase | to-lowercase }} </p>
        <hr>
        <button @click="fruits.push('Berries')">Add new item</button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from '../components/List.vue'
import { fruitMixin } from '../fruitMixin'
export default {
  mixins: [fruitMixin],
  data () {
    return {
      text: 'Hello There!'
    }
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  },
  components: {
    appList: List
  }
}
</script>
