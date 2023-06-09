// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    user: ref({}),
    userScore: ref([])
  }),
  getters:{
    setUser(session){
      if (session) {
        state.user = session.user
      } else {
        state.user = ref({})
      }
    }
  }
  })
