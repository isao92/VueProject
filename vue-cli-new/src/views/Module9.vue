<template>
  <div class="module9">
    <h1>Module #9</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <button @click="selectedComponent='appQuote'">Quote</button>
          <button @click="selectedComponent='appAuthor'">Author</button>
          <button @click="selectedComponent='appNew'">New</button>
          <app-quote>
          <p>{{ selectedComponent }}</p>
          <!-- keeping dynamic components alive -->
          <keep-alive>
            <component :is="selectedComponent">
            <p>Default Content</p>
            </component>
          </keep-alive>
          <!-- <h2 slot="title">{{ quoteTitle }}</h2>
          <h2 slot="new-quote">New Quote</h2>
          <p slot="content">A wonderful Quote</p> -->
          </app-quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from '../components/Quote.vue'
import Author from '../components/Author.vue'
import New from '../components/New.vue'
export default {
  data: function () {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  name: 'Module9',
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style scoped>
  h2 {
    color: blue;
  }
</style>
