<template>
  <div class="app-nav-bar">
    <TypingAnimation />
  </div>
</template>

<script>
import TypingAnimation from "./TypingAnimation";

export default {
  components: {
    TypingAnimation
  }
}
</script>

<style lang="scss" scoped>
  .app-nav-bar {
    position: relative;
    background-color: #26272b;
    color: #333;
    text-align: start;
    line-height: 60px;
    padding-left: 20px;
  }
</style>