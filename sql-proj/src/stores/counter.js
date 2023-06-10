// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)

//   return { count }
// })

import { reactive } from 'vue'
const state = reactive({
  user: null,
})
const methods = {
  setUser(payload){
    state.user = payload ? payload.user : null
  }
}
export default{
  state,
  methods
}
