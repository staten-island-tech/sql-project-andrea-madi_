// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    session: ref({})
  }),
})