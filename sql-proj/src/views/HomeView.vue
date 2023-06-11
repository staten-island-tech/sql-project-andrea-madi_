<script setup>
import card from '../components/card.vue'
import counter from '../stores/counter';
import { computed, ref } from 'vue';
import { supabase } from '../supabase';

const username = ref('')

const session = computed(()=> counter.state.user)
const user = session._value

const fetchData = async () => {
  console.log(session.id)
  try {
      const { data, error } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', session.id)
  .single()
  if (error) throw error
  if(data){
    username.value = data.full_name
  }

  console.log(data)
  } catch (error) {
    console.log(error)
  }
}
    
fetchData()

  

</script>

<template>
  <nav>
    <div class="home">
      <h1 v-if="!user">WELCOME user!</h1>
      <h1 v-if="user">WELCOME {{ username }}</h1>
    </div>
  </nav>
</template>

<style scoped>
.home{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
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
</style>
