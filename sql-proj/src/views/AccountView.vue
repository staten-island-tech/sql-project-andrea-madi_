<template>
    
</template>

<script>
import { ref } from 'vue';
import { supabase } from '../supabase';
import { useRoute } from 'vue-router';
export default{
    name: 'account',
    setup(){
        const data = ref(null)
        const dataLoaded = ref(null)
        const errorMsg = ref(null)
        const statusMsg = ref(null)
        const route = useRoute()

        // get current id of user
        const currentID = route.params.userID

        // get workout data
        const getData = async () => {
            try {
                const {data: profile, error} = await supabase
                .from('profiles')
                .select('*')
                .eq('id', currentID)
            if(error) throw error
            data.value = profile
            dataLoaded.value = true
            } catch (error) {
                errorMsg.value = error.message
                setTimeout(()=>{
                    errorMsg.value = false
                }, 5000)
            }
            
        }
        getData()

    }
}
</script>