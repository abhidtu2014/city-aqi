<template>
  <div id="app">
    <AppNavBar />
    <el-main>
      <Dashboard />
    </el-main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter";
import Dashboard from "./views/Dashboard";
import AppNavBar from "./components/AppNavBar";

export default {
  components: {
    AppNavBar,
    Dashboard,
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
