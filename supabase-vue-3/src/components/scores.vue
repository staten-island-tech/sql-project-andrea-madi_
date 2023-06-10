

<template>
<div class="container">
    <div class="row-card">
        <h2 id="name">{{ username }}</h2>
        <h2 id="score">{{ score }}</h2>
    </div>
</div>
</template>

<script>

export default{
    name: 'scores',
    data: {
    },
    props:{
        username: String,
        score: Number
    },
    methods:[]
}
</script>

<style>
.container{
    display: flex;
    flex-direction: column;
    height: 20vh;
    width: 80vw;
}
.row-card{
    display: flex;
    flex-direction: row;
    font-size: 2rem;
}
</style>