<template>
  <div class="card">
    <img :src="url" alt="" class="card-back" />
    <img
      :src="'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/16025342/acastro_190411_1777_Disney_Streaming_0003.0.jpg'"
      alt=""
      :class="{ 'card-front': true, 'is-flipped': flipped }"
    />
  </div>
</template>

<script>
// @click="show"
export default {
  name: 'card',
  props: {
    url: String,
    card: Object,
    flipped: Boolean
  },
  methods: {}
}
</script>

<style>
.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
  display: none;
}
.card {
  width: 150px;
  height: 150px;
  background-color: rgb(228, 167, 228);
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
}
.card-back {
  transform: rotateY(180deg);
  position: relative;
}
.card-front {
  position: absolute;
  height: 100%;
  width: 100%;
}
img {
  width: 50%;
  height: 100px;
}
.card img {
  background-color: rgb(228, 167, 228);
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
  min-height: 120px;
  cursor: pointer;
}
</style>
