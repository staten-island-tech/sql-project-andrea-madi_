<script setup>
import { ref, onMounted } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from './supabase'
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()
const session = ref()

onMounted(()=>{
        supabase.auth.getSession().then(({ data }) => {
          session.value = data.session
     })
     supabase.auth.onAuthStateChange((_, _session) => {    // this determines when the app state changes
       session.value = _session                           // and then updates the session data accordingly
       console.log(session)
     })
      })

</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template>