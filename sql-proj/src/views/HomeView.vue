
<template>
  <div class="about">
    <h2 v-if="!ready">Click to start!</h2>
    <button v-if='!ready' @click="startGame" class="btn">PLAY!</button>
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
    <button v-if='done' @click="endGame()">FiNISH!</button>
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
button{
    color: #2d1b4b;
    height: 3vh;
    border-radius: 5px;
    border: none;
    background-color: aliceblue;
}
  
</style>

<script>
import { ref } from 'vue'
import card from '../components/card.vue'
import counter from '../stores/counter'

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
      playing: ref(false),
      done: ref(false),
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
        this.done = true
        console.log('game is over')
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
      counter.state.userScore.push(this.turns)
      this.turns = 0
      this.ready = false
      this.done = false
      console.log('data.store count', counter.state.userScore)
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



<!-- <script setup>
import card from '../components/card.vue'
import counter from '../stores/counter';
import { computed, ref } from 'vue';
import { supabase } from '../supabase';

const username = ref('')

const session = computed(()=> counter.state.user)
const user = session._value

const fetchData = async () => {
  console.log(session.id)
  try {
      const { data, error } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', session.id)
  .single()
  if (error) throw error
  if(data){
    username.value = data.full_name
  }

  console.log(data)
  } catch (error) {
    console.log(error)
  }
}
    
fetchData()

  

</script>

<template>
  <nav>
    <div class="home">
      <h1 v-if="!user">WELCOME user!</h1>
      <h1 v-if="user">WELCOME {{ username }}</h1>
    </div>
  </nav>
</template>

<style scoped>
.home{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
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
</style> -->
