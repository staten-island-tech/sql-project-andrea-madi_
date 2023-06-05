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
    <h1>WELCOME {{ counter.name }}</h1>

  </div>
</template>

<style>
.about{
  text-align: center;
}
</style>
