<template>
  <div class="home">
    <Card v-for="deck in decks" :key="deck.url" />
  </div>
</template>

<script>
import Card from '../components/Card.Vue'
export default {
  components: {
    CoolCard,
    CoolButton
  },
  data() {
    return {
      student: 'Daria',
      animals: [
        { title: 'cat', desc: 'sneaky animal who poops in my house' },
        { title: 'Boggy-Woggy', desc: 'Stands too close to his teachers' }
      ],
      selected: '',
      graduated: false
      // text: "",
    }
  },
  methods: {
    test: function () {
      console.log('This is a test')
    }
  }
}

/* export default {
  name: "Home",
  data() {
    return{
       selected: "" */
/* decks: [
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
  ], */
/* },
  },
} */
</script>
