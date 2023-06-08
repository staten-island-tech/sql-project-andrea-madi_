<script setup>
import { onMounted, ref } from 'vue'
import Account from '../components/Account.vue'
import Auth from '../components/Auth.vue'
import { supabase } from '../supabase'
// import { useCounterStore } from '../stores/counter';

// const counter = useCounterStore();
const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((event, _session) => {
    if (event == 'SIGNED_IN') console.log('SIGNED_IN', session)
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>

  <div class="wrapper">
    <div class="split left">
      <div class="centered">
        <h2 class="text">Sign in:</h2>
        <p class="text">Some text.</p>
      </div>
    </div>

    <div class="split right">
      <div class="centered">
        <h2 class="text">Create an account:</h2>
        <p class="text">Some text here too.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  margin-top: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}

body {
  font-family: Arial;
  color: rgb(224, 181, 255);
}
.wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
.split{
    display: flex;
    justify-content: center;
    height: 50vh;
}
.centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: transparent;
}
.text{
    background-color: transparent;
}
</style>