<script setup>
import { ref } from 'vue'
import store from '../stores/store.js'
const msg = ref(' ' + 'player')
const msg2 = ref('')
function storeJs(msg, msg2) {
  store.data = []
  const arr = []
  arr.push(msg, msg2)
  store.data.push(arr)
}
</script>

<template>
  <div class="welcome">
    <h1>{{ 'welcome' + ' ' + msg }}</h1>
    input username:
    <input v-model="msg" />
    <button>enter</button>
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
