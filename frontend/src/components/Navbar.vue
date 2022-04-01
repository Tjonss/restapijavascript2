<template>
  <nav class="navbar navbar-light bg-light mb-5 text-center">
    <div class="container">
      <router-link to="/" class="navbar-brand">book<span class="no-store">Store</span></router-link>
      <small>Whenever you need to read about a book</small>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
}
</script>

<style scoped>
.no-store {
  text-decoration-line: line-through;
}
small {
  font-size: .7rem;
}
</style>