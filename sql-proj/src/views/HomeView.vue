<script>
import card from '../components/card.vue'
import counter from '../stores/counter';
import { computed } from 'vue';
import { supabase } from '../supabase';
// export default {
//   setup(){
//     const username = ref('')

//     const user = computed(()=> counter.state.user)

//     const fetchData = async () => {
//       try {
//         const { data, error } = await supabase
//       .from('profiles')
//       .select('username')
//       .eq('id', user.id)
//       .single()
//       if (error) throw error
//       if(data){
//         username.value = data.username
//       }

//       console.log(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
    
    
//     return {
//     user,
//     fetchData,
//     username
//   }
//   }
  
// }
</script>

<template>
  <nav>
    <div class="home">
      <!-- <h1 v-if="!user">welcome user!</h1>
      <h1 v-if="user">welcome {{ username }}</h1> -->
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
