<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default{
  name: 'App',
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <AppMain/>
  </main>
</template>

<style lang="scss">
@use './style/general.scss';
@use './style/partials/mixins.scss';
@use './style/partials/variables.scss';
</style>
