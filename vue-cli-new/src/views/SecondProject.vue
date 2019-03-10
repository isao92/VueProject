<template>
  <div class="secondProject">
    <div class="row">
      <div class="col-sm-12 text-center">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-project-quote @quoteAdded="newQuote"></app-new-project-quote>
      </div>
    </div>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectGridQuote from '../components/SecondProjectComponents/QuoteGrid.vue'
import NewProjectQuote from '../components/SecondProjectComponents/NewProjectQuote.vue'
import Header from '../components/SecondProjectComponents/Header.vue'
export default {
  data: function () {
    return {
      quotes: [
        'Just a Quote to see something'
      ],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote (quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please delete quotes first')
      }
      this.quotes.push(quote)
    },
    deleteQuote (index) {
      this.quotes.splice(index, 1)
    }
  },
  name: 'SecondProject',
  components: {
    AppQuoteGrid: ProjectGridQuote,
    AppNewProjectQuote: NewProjectQuote,
    AppHeader: Header
  }
}
</script>

<style>
</style>
