<template>
  <div id="app">
    <AppNavBar />
    <el-main><router-view /></el-main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter";
import AppNavBar from "./components/AppNavBar";

export default {
  components: {
    AppNavBar,
    AppFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-main {
  background-color: #F6F6F6;
}
</style>
