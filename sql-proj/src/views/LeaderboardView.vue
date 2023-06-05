<script>
import scores from '../components/scores.vue'
import store from '../stores/counter'

export default{
  name: 'leaderboard',
  data: {
    store
  },
  components: {
    scores
}
}
</script>

<template>
<div class="container">
    <header>
        <h1>LEADERBOARD STANDINGS</h1>
    </header>
    <scores v-for="scorer in store.all" :username="scorer.name" :userBest="scorer.userBest"/>
</div>
</template>

<style scoped>

</style>