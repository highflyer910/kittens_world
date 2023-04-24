<template>
<div class="bg-deep-50 p-4 flex justify-between items-center">
  <div class="flex items-center">
    <img src="../assets/kitty.png" width="50" alt="logo" class="mr-2">
    <h1 class="text-3xl text-tasman-50">
      <router-link to="/">Kittens World</router-link>
    
    </h1>
  </div>
  
  <div>
    <router-link to="/" class="menu">Home</router-link>
    <router-link to="/about" class="menu">About</router-link>
  </div>
</div> 
</template>

<style scoped>
  .menu{
    @apply 
    p-3 
    text-lg 
    text-tasman-50;
  }

  .menu:hover{
    @apply 
  text-tasman-0
}

</style>   