<template>
    <Navbar />
  <div class="container">

  <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar,
  }
}
</script>

<style>

body {
  font-family: 'Montserrat', sans-serif;
  background: rgb(240, 240, 240);
}
.custom-card {
  max-width: 325px;
  min-width: 300px;
}
img {
  height: 200px;
  object-fit: contain;
}
.center {
  margin-top: 1rem;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

</style>
