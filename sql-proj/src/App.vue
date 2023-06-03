<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">PLAY</RouterLink>
        <RouterLink to="/about">SIGN IN</RouterLink>
        <RouterLink to="/leaderboard">LEADERBOARD</RouterLink>
      </nav>
      <img class='img' src="https://images.squarespace-cdn.com/content/v1/5b60ce200dbda3b4ad443fad/7d34a71a-42cc-49df-9684-8a3200088289/Untitled+design+%284%29.png" alt="">
    </div>
  </header>

  <RouterView />
</template>


<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 2rem;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
.img{
  align-items: center;
  height: 50rem;
}
</style>