<script setup>
import { ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from './supabase'
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()

counter.fetch()

</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="counter.session" :session="counter.session" />
    <Auth v-else />
  </div>
</template>