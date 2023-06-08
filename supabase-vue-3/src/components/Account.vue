<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'
import Avatar from './Avatar.vue'
// import { useCounterStore } from '../stores/counter';
// const counter = useCounterStore()

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const high_score = ref(100)
const avatar_url = ref('')

onMounted(() => {
  getProfile()
  
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, avatar_url, high_score`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      high_score.value = data.high_score
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      high_score: high_score.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function deleteAcc(){
  try {
    loading.value = true
  } catch (error) {
    
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <label for="password">password</label>
      <input id="password" type="text" :value="session.user.password"/>
      <p>Name: {{ session.user.password }}</p>
    </div>
    <div>
      <p> High Score: {{ high_score }}</p>
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>