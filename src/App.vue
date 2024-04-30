<template>
  <MainHeader></MainHeader>
  <router-view></router-view>
  <MainFooter></MainFooter> 
</template>

<script>

import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: { 
    MainFooter,
    MainHeader,
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #648eb9;
}
</style>
