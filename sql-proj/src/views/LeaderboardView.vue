<script>
import { Rankings } from '../components/Rankings.vue'
export default{
  setup(){
  }
}
</script>

<template>
<div class="container">
  <h1>THIS IS THE LEADERBOARD PAGE</h1>
  <Rankings
  v-for="player in data"
  :key="player.id"

  />
</div>
</template>

<style scoped>

</style>