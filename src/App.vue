<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
    <Spinner/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style>
#app{
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active{
  transition: all .5s ease;
}
</style>
