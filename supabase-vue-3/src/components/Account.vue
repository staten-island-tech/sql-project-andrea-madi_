<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'
import Avatar from './Avatar.vue'
// import { useCounterStore } from '../stores/counter';
// const counter = useCounterStore()

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const email = ref('')
const password = ref('')
const full_name = ref('')

onMounted(() => {
  getProfile()
  
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`email, password, full_name`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      email.value = data.email
      password.value = data.password
      full_name.value = data.full_name
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
      email: email.value,
      password: password.value,
      full_name: full_name.value,
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