<script>
import {useLoginStore} from '../stores/login'
const login = useLoginStore()
let name = login.name

</script>


<template>
  <div class="about">
    <h1>welcome to the game {{ name }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
