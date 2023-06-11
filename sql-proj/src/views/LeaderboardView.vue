<script>
import Rankings from '../components/Rankings.vue'
import { ref } from 'vue'
export default{
  components:{
    Rankings
  },
  setup(){

    const users = ref(null)
    const dataLoaded = ref(null)
    const errorMsg = ref(null)

    const getData = async () => {
          try {
              const {data: profiles, error} = await supabase
              .from('profiles')
              .select('*')
          if(error) throw error
          data.value = profiles
          data.value = users
          console.log(data.value)
          dataLoaded.value = true
          } catch (error) {
              errorMsg.value = error.message
              setTimeout(()=>{
                  errorMsg.value = false
              }, 5000)
          }
          
      }
      getData()

      return{
        users,
        dataLoaded,
        errorMsg
      }
  }
}
</script>

<template>
<div class="container">
  <h1>THIS IS THE LEADERBOARD PAGE</h1>
  <Rankings
  v-for="player in users"
  :key="player.id"
  :username="player.full_name"
  class="user"
  />
</div>
</template>

<style scoped>
.user{
  background-color: aquamarine;
}
</style>