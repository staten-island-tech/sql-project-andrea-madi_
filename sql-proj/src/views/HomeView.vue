<script>
import card from '../components/card.vue'
import counter from '../stores/counter';
import { computed, ref } from 'vue';
import { supabase } from '../supabase';
export default {
  setup(){
    const username = ref('')

    const User = computed(()=> counter.state.user)

    const getUser = async () => {
      try {
      const { data, error } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', User.id)
      .single()
      if (error) throw error
      console.log(User)
      if(data){
        username.value = data.full_name
      }

      console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    
    getUser();
    
    return {
    User,
    getUser,
    username
  }
  }
  
}
</script>

<template>
  <nav>
    <div class="home">
      <h1 v-if="!User">welcome user!</h1>
      <h1 v-if="User">welcome {{ username }}</h1>
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
