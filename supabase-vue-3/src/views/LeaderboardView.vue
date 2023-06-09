<script>
import { supabase } from '../supabase'
import { onMounted, ref } from 'vue';
import scores from '../components/scores.vue'
// import { useCounterStore } from '../stores/counter';
// const counter = useCounterStore()

export default{
    name: "leaderboard",
    options:{
        data:{
            full_name: ref(''),
            high_score: ref(''),
            sortedData: ref()
        }
    },
    methods: {
        getProfile: async () =>{
            try{
                let {data, error, status } = await supabase
                .from('profiles')
                .select('full_name, high_score')
                let sortedData = data.map((item) => item.high_score).sort((a, b) => a - b);
                console.log(sortedData)
                if(error && status !== 406) throw error
                if (data){
                    full_name.value = data.full_name
                    high_score.value = data.high_score
                    console.log(data)
                }
            }   catch(error){
                alert(error.message)
            }
        },
    },
    components:{
        scores
    }
}
onMounted(()=>{
    getProfile();
})

</script>

<template>
    <div class="container">
        <h2>LEADERBOARD</h2>
        <scores
            v-for="item in sortedData" 
            :key="user.high_score"
            :username="user.full_name"
            :score="user.high_score"
        />
    </div>

</template>


<style scoped>

</style>