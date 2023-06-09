
<script>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'
// const props = defineProps(['session'])
// const { session } = toRefs(props)

// const router = useRouter()
// const loading = ref(false)
// const email = ref('')
// const password = ref('')
// const full_name = ref('')


export default{
  name: 'login',
  methods: {
    login: async()=>{
      try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    console.log('running?')
    if (error) throw error
    router.push({name: 'game'})
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  }
    }
  },
  data(){
    return{
      router: useRouter(),
      loading: ref(false),
      email: ref(''),
      password: ref('')
    }
  }
}
  

</script>

<template>
<form class="row flex-center flex">
    <div class="col-6 form-widget">
      <div>
        <label for="Email">email</label>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input class="inputField" required type="text" placeholder="Your Password" v-model="password" />
      </div>
      <div>
        <button
          @click="login"
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'submit'"
          :disabled="loading">
          submit
        </button>
          
        
      </div>
    </div>
  </form>
</template>
    <!-- 
    - create database with all the users
    - create database with all the users organized by order of the best score
        - use array methods to identify the best scores
        - leaderboard database which will sort best score values chronologically
    - join tables, delete accounts
    - rearrange login page so returning players can sign in immediately without magic link
    -->

<style scoped>
    body {
      font-family: Arial;
      color: white;
    }
    
</style>