// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    session: ref({}),
    userBest: ref(0),
    userData: ref([]),
    allData: ref([]),
    name: ref(''),
    avatar: ref('https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg')
  }),
})