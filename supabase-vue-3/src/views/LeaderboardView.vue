<script>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore()
export default{
    name: 'leaderboard',
    data: {
        return: {
            counter
        }
    }
}
</script>

<template>
<header>
    <h1>LEADERBOARD</h1>
</header>
<section>
    <!-- <div class='user' v-for="user in users" :key="user.id">
        <h3>counter.name</h3>
        <img src="{{ counter.avatar }}" alt="">
    </div> -->
</section>
</template>

<!-- 
- create database with all the users
- create database with all the users organized by order of the best score
    - use array methods to identify the best scores
    - leaderboard database which will sort best score values chronologically
- join tables, delete accounts
- rearrange login page so returning players can sign in immediately without magic link
-->

<style>
.user{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: cadetblue;
}
</style>