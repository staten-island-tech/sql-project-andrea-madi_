<template>
    <h1>{{ errorMsg }}</h1>
    <div class="profile">
        <img :src="currentUser.avatar_url" alt="">
        <div class="content">
            <label for="username">USERNAME:</label>
            <h1>{{ currentUser.full_name }}</h1>
            <label for="highscore">HIGH SCORE:</label>
            <h1>{{ currentUser.high_score }}</h1>
        </div>
        
    </div>
</template>


<style scoped>
body{
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile{
    background-color: #6969b35d;
    width: 80vw;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
}
.content, label{
    background-color: transparent;
}
img{
    height: 25vh;
    width: 25vh;
    margin: 3rem;
}
h1{
    background-color: transparent;
    margin: 2rem;
}
label{
    font-size: 2rem;
}
</style>
<script>
import { ref } from 'vue';
import { supabase } from '../supabase';
import { useRoute } from 'vue-router';
import counter from '../stores/counter'
export default{
    name: 'account',
    setup(){
        const currentUser = ref(null)
        const dataLoaded = ref(null)
        const errorMsg = ref(null)

        // get current id of user
        const currentID = counter.state.user.id

        // get workout data
        const getData = async () => {
            try {
                const {data, error} = await supabase
                .from('profiles')
                .select()
                .eq('id', currentID)
                .single()
                if(error) throw error
                console.log(data)
                currentUser.value = data
                dataLoaded.value = true
            } catch (error) {
                errorMsg.value = error.message
                setTimeout(()=>{
                    errorMsg.value = false
                }, 5000)
            }
            
        }
        getData()

        return{
            currentUser,
            dataLoaded,
            errorMsg
        }
    }
}
</script>