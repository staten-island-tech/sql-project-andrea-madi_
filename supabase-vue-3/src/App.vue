<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/game" > game </RouterLink>
        <RouterLink to="/leaderboard" > leaderboard </RouterLink>
        <RouterLink to="/" > sign in</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin-left: 50rem;
}

@media (min-width: 1024px) {

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
