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

<style lang="scss">
@import 'src/styles/main.scss';
</style>
