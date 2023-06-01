<script setup>
import { ref } from 'vue'
const msg = ref(' ' + 'player')
const password = ref('')
</script>

<template>
  <div class="welcome">
    <h1>{{ 'welcome' + ' ' + msg }}</h1>
    input username:
    <input v-model="msg" />
    <button >enter</button>
    password:
    <input v-model="password" />
    <button>enter</button>
  </div>
  
</template>

<style scoped>
body {
  background-color: white;
}
</style>
