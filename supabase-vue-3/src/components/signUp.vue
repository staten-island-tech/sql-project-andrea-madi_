<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const loading = ref(false)
const email = ref('')
const password = ref('')
const full_name = ref('')

const handleSignUp = async () => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
      data: {
        full_name: full_name.value
      }
    }
    })
    if(error) throw error
    // await insertData(user)
    alert('New account successfully registered!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  }
  try {
    const { error } = await supabase.from('profiles').insert([
      {
        email: email.value,
        full_name: full_name.value
      }
    ])
  
    if (error) throw error
    
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  }
}


</script>

<template>
  <form class="row flex-center flex">
    <div class="col-6 form-widget">
      <div>
        <label for="email">email</label>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input class="inputField" required type="text" placeholder="Your Password" v-model="password" />
      </div>
      <div>
        <label for="full_name">full name</label>
        <input class="inputField" required type="text" placeholder="Your Full Name" v-model="full_name" />
      </div>
      <div>
        <button 
        @click="handleSignUp"
          type="submit"
          class="button block"
          :disabled="loading">
          {{loading ? 'Loading' : 'submit'}}
        </button>
         
        
      </div>
    </div>
  </form>
</template>