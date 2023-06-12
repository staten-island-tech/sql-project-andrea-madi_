<script>
export default {
  props: ['username', 'high_score', 'avatar_url'],
  setup(props) {
    console.log(props.username)
  }
}
</script>

<template >
<div class="player">
    <img :src="avatar_url" alt="">
    <h1>{{ username }}</h1>
    <h1>{{high_score}}</h1>
    <h1>...</h1>
</div>
</template>

<style scoped>
h1{
  background-color: transparent;
  width: 33vw;
}
.player{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  width: 100vw;
}

img{
  height: 3rem;
  width: 4vw;
  margin: 1rem;
}
</style>