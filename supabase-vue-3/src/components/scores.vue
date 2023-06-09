

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
        sortedValues:[]
    },
    props:{
        username: String,
        score: Number
    },
    methods:[
        function compile(){
            store.allData.push(store.userData)
        },
        function findMin(array){
            const userBest = Math.min(array)
            store.allBest.push(userBest)
            sortedValues = store.allBest.toSorted((a, b) => a - b);
            console.log(sortedValues)
        }
    ]
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