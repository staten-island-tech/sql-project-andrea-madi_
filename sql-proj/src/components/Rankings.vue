<script>
export default {
  props: ['username'],
  setup(props) {
    console.log(props.username)
  }
}
</script>

<template>
<div class="wrapper">
    <h1>welcome {{ username }}</h1>
</div>
</template>
