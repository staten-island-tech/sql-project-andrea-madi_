<script setup>
import { ref } from 'vue'
const msg = ref(' ' + 'player')
const msg2 = ref('')
function storeJs() {}
</script>

<template>
  <h1>{{ 'welcome' + ' ' + msg }}</h1>
  input username:
  <input v-model="msg" />
  <button onclick="storeJs()">enter</button>
  password:
  <input v-model="msg2" />
  <button onclick="storeJs()">enter</button>
</template>

<style scoped>
body {
  background-color: white;
}
</style>
