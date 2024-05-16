<template>
  <div id="app">
    <Header />
    <Memo />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Memo from './components/Memo.vue'

export default {
  name: 'App',
  components: {
    Header,
    Memo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
