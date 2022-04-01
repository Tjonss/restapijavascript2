<template>
   <div v-if="books" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 g-4">
    <BookCard v-for="book in books" :key="book._id" :book="book" /> 
  </div>
</template>

<script>
import BookCard from './BookCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    BookCard
  },
  computed: {
    ...mapGetters(['books'])
  },

}
</script>

<style>

</style>