<script>
import store from '../stores/counter'

export default{
    name: 'scores',
    data: {
        sortedValues:[]
    },
    props:{
        
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

<template>
<div class="container">
    
</div>
</template>
