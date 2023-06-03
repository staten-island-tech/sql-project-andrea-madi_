<template>
  <div class="flip-card" v-on:click="handleClick(flip-card)">
    <div class="flip-card-inner">
    <div class="flip-card-front">
        <img class='logo' src="https://hipfonts.com/wp-content/uploads/2022/08/Walt_Disney_logo_cover.png" alt="disney theme logo">
    </div>
    <div class="flip-card-back">
      <img class='cards' :src="url" alt="character img" />
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    url: String,
    deck: Object
  },
  methods:{
    handleClick(el) {
      el.classList.toggle('flip-card-active');
    }
  }
}

</script>

<style>
.logo {
  width: 40%;
}

.cards{
  width: 20%;
  background-color: black;
}

.flip-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  perspective: 1000px;
  margin: .5rem;
  height: 25vh;
  width: 28vw;

}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-active .flip-card-inner {
  transform: rotateY(-180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
  background-color: black;
  color: #fff;
  justify-items: center;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
