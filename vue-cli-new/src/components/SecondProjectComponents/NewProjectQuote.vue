<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <form>
          <div class="col-sm-8">
            <label>Quote</label>
            <textarea class="form-control" rows="3" v-model="quote"></textarea>
          </div>
          <div class="col-sm-8">
            <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      quote: ''
    }
  },
  methods: {
    createNew () {
      this.$emit('quoteAdded', this.quote)
      this.quote = ''
    }
  }
}
</script>

<style>
</style>
