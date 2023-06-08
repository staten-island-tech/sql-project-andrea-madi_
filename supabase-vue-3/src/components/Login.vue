<template>
    <div class="wrapper">
    <div class="split left">
      <div class="centered">
        <h2>Jane Flex</h2>
        <p>Some text.</p>
      </div>
    </div>
    
    <div class="split right">
      <div class="centered">
        <h2>John Doe</h2>
        <p>Some text here too.</p>
      </div>
    </div>
    </div>
</template>
    
<script>
export default{
    name: 'Login',
    data: {
        
    }
}
</script>
    <!-- 
    - create database with all the users
    - create database with all the users organized by order of the best score
        - use array methods to identify the best scores
        - leaderboard database which will sort best score values chronologically
    - join tables, delete accounts
    - rearrange login page so returning players can sign in immediately without magic link
    -->
    
<style>
    body {
      font-family: Arial;
      color: white;
    }
    
    .split {
      height: 100%;
      width: 50%;
      position: fixed;
      z-index: 1;
      top: 0;
      overflow-x: hidden;
      padding-top: 20px;
    }
    
    .left {
      left: 0;
    }
    
    .right {
      right: 0;
    }
    
    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    
</style>