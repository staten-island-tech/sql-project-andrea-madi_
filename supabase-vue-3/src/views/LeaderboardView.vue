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
    <div class='user' v-for="user in users" :key="user.id">
        <h3>counter.name</h3>
        <img src="{{ counter.avatar }}" alt="">
    </div>
</section>
</template>

<!-- find a way to access all of the users (ie: through a single database) and
search through those users and rearrange them in order of the best to worst
scores and put each of them on the leaderboard in their ranking to show their
ranking among other players. obviously the syntax that i've written is wrong but
that is the basic idea. i also need to change the array methods functions that i 
tried to use in scores component but that's the basic idea. everything else works-
the game and the login, i just need to figure out how to record the scores and 
refer back to them and also how to join tables and delete accounts and rearrange
the login page in order for returning players to sign in immediately without having
to go through the whole email process and for newwer users, we can just require an
email which will just end up sending them to the exact same place where they can set
up their account with the same access as would any returning player also going back
to the whole merging tables thing, the profile database will just have all the individual
account info of each player including their highest score and we can take that value
and create a new table which will basically take all the usernames, avatars, and high
scores--without any of the the login info-- and create a new table that will be used
to create the leaderboard by sorting the high score values chronologically-->

<style>

</style>