<template>
  <div class="module9">
    <h1>Module #9</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <app-quote>
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p slot="content">A wonderful Quote</p>
          </app-quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from '../components/Quote.vue'
export default {
  data: function () {
    return {
      quoteTitle: 'The Quote'
    }
  },
  name: 'Module9',
  components: {
    appQuote: Quote
  }
}
</script>

<style scoped>
  h2 {
    color: blue;
  }
</style>
