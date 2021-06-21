<template>
  <div id="app">
    <el-container>
      <el-header><AppNavBar /></el-header>
      <el-main><router-view /></el-main>
      <el-footer><AppFooter /></el-footer>
    </el-container>
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

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: start;
  line-height: 60px;
}
</style>
