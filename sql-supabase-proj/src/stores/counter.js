import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { supabase } from '../supabase'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    session: ref(null),
  }),
  actions: {
    async fetch(){
      onMounted(()=>{
        supabase.auth.getSession().then(({ data }) => {
          this.session = data.session
     })
     supabase.auth.onAuthStateChange((_, _session) => {    // this determines when the app state changes
       this.session = _session                           // and then updates the session data accordingly
       console.log(this.session)
     })
      })
      
    }
  },
})