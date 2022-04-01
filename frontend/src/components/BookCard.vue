<template>

 <div class="col">
    <div class="h-100 mb-2 m-auto card shadow bg-body rounded custom-card">
      <img :src="book.image" class="rounded center" alt="book cover"/>
      <div class="card-body p-3 text-center">
        <h5 class="card-title border-bottom text-dark h5 ">{{book.title}}</h5>
        <p class="card-text text-dark">{{book.desc.slice(0, 140)}}...</p>
      </div>
      <div class="container">
        <p class="mb-3 text-body text-center">Författare: {{book.author}}</p>
        <router-link 
        :to="{ name: 'bookdetails', params: { id: book._id }}" 
        type="button" 
        class="btn center w-100 mb-2 btn-dark">Läs mer..</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['book']
}
</script>

<style>

</style>