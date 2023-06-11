import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { supabase } from '../supabase'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    session: ref(null),
  }
)}
)