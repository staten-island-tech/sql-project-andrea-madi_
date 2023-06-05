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

import { reactive, ref } from 'vue'
const store = reactive({
  userData: ref([]),
  allData: ref([]),
  allBest: ref([])
})
export default store

// import { defineStore } from 'pinia'
// import { ref } from 'vue'

// export const useCounterStore = defineStore('counter', {
//   state: () => ({ 
//     data: ref([]),
//     scores: ref([])
//   }),
// })