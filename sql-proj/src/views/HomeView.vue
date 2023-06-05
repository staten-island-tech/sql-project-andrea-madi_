<script>
import card from '../components/card.vue'
import store from '../stores/counter'
export default {
  name: 'Home',
  props: {
    url: String
    // turns: Number
  },
  components: {
    card
  },
  data() {
    return {
      selected: undefined,
      turns: 0,
      decks: [
        {
          type: 'aurora',
          url: 'https://www.pngmart.com/files/6/Princess-Aurora-PNG-Picture.png'
        },
        {
          type: 'cinderella',
          url: 'https://clipart-library.com/images_k/disney-princess-silhouette-free-printables/disney-princess-silhouette-free-printables-12.png'
        },
        {
          type: 'rapunzel',
          url: 'https://www.freeiconspng.com/thumbs/rapunzel-png/image-rapunzel-png-7.png'
        },
        {
          type: 'mulan',
          url: 'https://www.nicepng.com/png/full/18-186074_fa-mulan-free-png-image-disney-princess-mulan.png'
        },
        {
          type: 'jasmine',
          url: 'https://i.pinimg.com/originals/44/7b/af/447baf7ba53755e1526beff65e5dc774.png'
        },
        {
          type: 'tiana',
          url: 'https://i.pinimg.com/originals/a0/44/51/a04451d5e5befbedf0bfeba4e0b9d2f2.png'
        },
        {
          type: 'aurora',
          url: 'https://www.pngmart.com/files/6/Princess-Aurora-PNG-Picture.png'
        },
        {
          type: 'cinderella',
          url: 'https://clipart-library.com/images_k/disney-princess-silhouette-free-printables/disney-princess-silhouette-free-printables-12.png'
        },
        {
          type: 'rapunzel',
          url: 'https://www.freeiconspng.com/thumbs/rapunzel-png/image-rapunzel-png-7.png'
        },
        {
          type: 'mulan',
          url: 'https://www.nicepng.com/png/full/18-186074_fa-mulan-free-png-image-disney-princess-mulan.png'
        },
        {
          type: 'jasmine',
          url: 'https://i.pinimg.com/originals/44/7b/af/447baf7ba53755e1526beff65e5dc774.png'
        },
        {
          type: 'tiana',
          url: 'https://i.pinimg.com/originals/a0/44/51/a04451d5e5befbedf0bfeba4e0b9d2f2.png'
        }
      ]
    }
  },
  methods: {
    show(deck) {
      if (deck.matched) {
        return
      }
      if (!this.selected) {
        this.selected = deck
        deck.flipped = true
        return
      }
      deck.flipped = true
      if (deck.type == this.selected.type) {
        deck.matched = true
        this.selected.matched = true
        this.selected = undefined
        return
      }
      // if (this.card.type == this.correct) {
      //   return
      // }
      setTimeout(() => {
        deck.flipped = false
        this.selected.flipped = false
        this.selected = undefined
      }, 500)
      this.turns++
      // alert(this.turns)
    },
    randomize() {
      store.userData.push(this.turns)
      this.turns = 0
      console.log('data.store count', store.userData)
      this.decks.sort(() => Math.random() - 0.5)
      for (let i = 0; i < this.decks.length; i++) {
        this.decks[i].flipped = false
        this.decks[i].matched = false
      }
    }
  }
}
/* created()
{
  this.decks.forEach((deck) => {
    Vue.set(deck, 'isFlipped', false)
  })
  memoryCards: [],
    (this.memoryCards = _.shuffle(
      this.memoryCards.concat(_.cloneDeep(this.decks), _.cloneDeep(this.decks))
    ))
} */

</script>

<template>
  <nav>
    <div class="home">
      <card
        v-for="deck in decks"
        :card="deck"
        :url="deck.url"
        :flipped="deck.flipped"
        @click="show(deck)"
      />
    </div>
    <button @click="randomize()" class="btn">replay!</button>
    <h2 class="turns">Turns: {{ turns }}</h2>
  </nav>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin: 0 1rem;
}
img {
  width: 100%;
  height: 100%;
}
.turns {
  color: cornflowerblue;
}
.btn {
  color: aliceblue;
  background-color: darkslateblue;
  height: 50px;
  width: 100px;
  font-size: 30px;
}
nav {
  width: 100%;
  font-size: 2rem;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
