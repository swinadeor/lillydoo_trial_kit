<template>
  <div id="app">
    <trial-kit/>
  </div>
</template>

<script>
import TrialKit from './layout/TrialKit.vue'

export default {
  name: 'app',
  components: {
    TrialKit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
