<template>
  <!-- <HeaderComponent></HeaderComponent> -->
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
// import HeaderComponent from './components/HeaderComponent.vue';
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components:{
    // HeaderComponent,
    Nav
  }
}
</script>

<style lang="scss" scoped>

</style>