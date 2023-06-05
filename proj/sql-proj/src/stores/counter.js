import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  cards = [
    {
      name: 'blossom',
      url: 'https://i.pinimg.com/originals/08/5d/a8/085da848f21076e4f230e6f27a69e73e.png'
    },
    {
      name:'bubbles',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MOWsEDNqVcmV8ATAzFmphkfltJqLNYmGcg&usqp=CAU'
    },
    {
      name:'buttercup',
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXyblJRV5KTmqe9TG7ojinz2Hd43LUi5t-g&usqp=CAU'
    },
    {
      name:'mojo jojo',
      url: 'https://www.nicepng.com/png/full/316-3163027_cartoon-network-characters-names-powerpuff-girl-characters-mojo.png'
    },
    {
      name: 'bliss',
      url: 'https://seeklogo.com/images/P/powerpuff-girls-bliss-logo-00FB75E5EE-seeklogo.com.png'
    },
    {
      name:'professor utonium',
      url: 'https://static.wikia.nocookie.net/blossom/images/6/6b/Ppgood007.gif/revision/latest/scale-to-width-down/350?cb=20120819194717'
    }
  ]

  return { cards }
})
