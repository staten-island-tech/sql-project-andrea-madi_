import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const name = ref('')
  const password = ref('')

  return { name, password }
})
