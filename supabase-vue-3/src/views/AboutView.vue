<script>
import { useCounterStore } from '../stores/counter'
export default {
  name: 'App',
  data() {
    const counter = useCounterStore()
    return {
      counter
    }
  }
}
</script>


<template>
  <div class="about">
    <h1>hello! welcome to the game {{ counter.name }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
