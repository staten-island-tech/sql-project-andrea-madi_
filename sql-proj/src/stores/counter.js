// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'
// import AboutView from '../views/AboutView.vue'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

import { reactive } from 'vue'
export const store = reactive({
  data: []
})
