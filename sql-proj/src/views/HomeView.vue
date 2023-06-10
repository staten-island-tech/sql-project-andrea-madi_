<script>
import card from '../components/card.vue'
export default {
  name: 'Home',
  props: {
    url: String
  },
  components: {
    card
  },
  data() {
    return {
      selected: '',
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
  }
}
</script>

<template>
  <nav>
    <div class="home">
      <!-- <card v-for="deck in decks" :key="deck" :url="deck.url" /> -->
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
</style>
