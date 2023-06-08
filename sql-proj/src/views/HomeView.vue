<template>
  <div class="home">
    <Card v-for="deck in decks" :key="deck.url" />
  </div>
</template>

<script >
export default {
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

</script>
