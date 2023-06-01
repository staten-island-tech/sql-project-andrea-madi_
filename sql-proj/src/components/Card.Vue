<template>
  <div class="card">
    <img :src="image" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: String
  }
}
</script>

<style>
.card {
  width: 30%;
  background-color: whitesmoke;
  height: 300px;
  margin: 10px auto;
}
img {
  width: 100%;
}
</style>
