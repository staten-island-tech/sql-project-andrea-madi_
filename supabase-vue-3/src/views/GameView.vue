
<template>
  <div class="about">
    <h1>WELCOME {{ counter.name }}</h1>
    <button @click="startGame()" class="btn">Play!</button>
    <h2>Click Play! to start</h2>
    <div class="home">
      <card
        v-if="ready"
        v-for="deck in decks"
        :card="deck"
        :url="deck.url"
        :flipped="deck.flipped"
        @click="show(deck, count)"
      />
      <card
        v-else
        v-for="deck in decks"
        :card="deck"
      />
    </div>
    <button @click="endGame()" class="btn">sumbit score + replay!</button>
    <h2 class="turns">Turns: {{ turns }}</h2>
  </div>
</template>

<style>
.about{
  text-align: center;
}

.home {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin: 0 1rem;
}
</style>

<script>
import { ref } from 'vue'
import card from '../components/card.vue'
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()

// const props = defineProps(['session'])
// const { session } = toRefs(props)

export default {
  name: 'game',
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
      ready: ref(false),
      count:1,
      
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
      ],
      counter
    }
  },
  methods: {
    show(deck, count) {
      
      if (deck.matched) {
        console.log('done')
        return
      }
      if (!this.selected) {
        this.selected = deck
        deck.flipped = true
        console.log('flip')
        return
      }
      deck.flipped = true
      if (deck.type == this.selected.type) {
        deck.matched = true
        this.selected.matched = true
        this.selected = undefined
        console.log('match')
        this.count++;
        console.log(count)
        if(count == 6){
        console.log('game is over')
        alert('Congrats! You win! Click the Refresh Button to play again and beat your best score!')
      }
        return{

        }
      }

      

      setTimeout(() => {
        deck.flipped = false
        this.selected.flipped = false
        this.selected = undefined
      }, 500)
      this.turns++
      // alert(this.turns)
    },
    startGame(){
      this.randomize();
      this.ready = true
    },
    endGame() {
      counter.userScore.push(this.turns)
      this.turns = 0
      console.log('data.store count', counter.userScore)
      this.randomize();
      updateProfile(this.turns)
    },
    randomize(){
      this.decks.sort(() => Math.random() - 0.5)
      for (let i = 0; i < this.decks.length; i++) {
        this.decks[i].flipped = false
        this.decks[i].matched = false
      }
    },    
    async updateProfile(highscore) {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      high_score: highscore,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
  }
}

</script>

