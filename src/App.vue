<template>
  <div id="app">
    <transition name="bounce">
      <router-view class="main"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body{
    background-color:rgb(172, 110, 30);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
  }
.main{
    margin:0 auto;
}
.bounce-enter-active {
  animation: bounce-in .7s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
