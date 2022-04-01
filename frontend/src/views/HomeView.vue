<template>
  <div>
    <BookContainer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BookContainer from '../components/BookContainer.vue'

export default {
  components: {
    BookContainer
  },
  methods: {
    ...mapActions(['fetchBooks'])
  },
  created() {
    this.fetchBooks()
  }
}
</script>
