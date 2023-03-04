<template>
  <Synth msg="Synth this Page"/>
</template>

<script>
import Synth from './components/UseSynth.vue'

export default {
  name: 'App',
  components: {
   Synth
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
