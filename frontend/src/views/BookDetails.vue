<template>
  <div class="text-center">
    <router-link to="/" class="fa-solid fa-arrow-left-long mb-4 arrow"></router-link>
  </div>
    <div v-if="book" class="container card mb-3" style="max-width: 700px;">
      <div class="col-md-12 center">
        <img :src="book.image" alt="book cover" class="img-fluid rounded-start center"/>
      </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card-body">
          <h3 class="mb-3 card-title text-center text-dark border-bottom">{{book.title}}</h3>
          <p class="card-text mb-3">
            {{book.desc}}
          </p>
          <div class="d-flex justify-content-between align-items-center mt-5">
            <small class="h5">Författare: {{ book.author }}</small>
            <small class="h4">Pris: {{ book.price }}:-</small>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 props: ['id'],
 methods: {
   ...mapActions(['getOneBook'])
 },
 computed: {
   ...mapGetters(['book'])
 },
 created(){
  this.getOneBook(this.id)
}
}

</script>
<style scoped>
.arrow {
  font-size: 2rem;
  color: rgb(31, 31, 31);
  position: relative;
}
.arrow::after {
  content: "Go back";
  font-size: 2rem;
  margin-left: 1rem;
  letter-spacing: 3px;
}
</style>
