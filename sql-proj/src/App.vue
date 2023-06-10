<template>
  <div class="wrapper" v-if="appReady">
    <Navigation/>
    <RouterView />
  </div>
  
</template>

<script>
import Navigation from './components/Navigation.vue'
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from './supabase'
import {ref} from 'vue'
import counter from './stores/counter'
export default{
  components: {
    Navigation
  },
  setup(){
    // create data / vars
    const appReady = ref(null)
    // check to see if user is already logged in
    const getCurrentUser = async () => {
      try {
        const { user, session } = await supabase.auth.getSession();
        
        if (user) {
          // If a user is authenticated
          const { data, error } = await supabase.auth.getUser(user.id);
          console.log('user logged in')
          if (error) {
            throw error;
          }
          
          console.log('User:', data);
        } else {
          // If no user is authenticated
          console.log('No user logged in.');
          appReady.value = true
        }
      } catch (error) {
        console.error('Error retrieving user:', error.message);
      }
    };

    // Call the function to get the current user
    getCurrentUser();
        

    // if user does not exist, need to make app ready
    // if(!user){
    //   appReady.value = true
    // }
    // runs when there is a auth state change
    // if user is logged in, this will fire
    supabase.auth.onAuthStateChange((_, session)=>{
      console.log('hello')
      counter.methods.setUser(session);
      appReady.value = true
    })

    return{appReady}
  }
}
</script>

<style>

</style>