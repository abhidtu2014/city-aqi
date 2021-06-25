<template>
  <h1 class="typing">{{content}}</h1>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "Real Time AQI"
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #26272b;
$text-color: #e6e3e3;
$caret-color: white;
$text-length: 16;
$animation-time: 4s;
h1 {
  display: inline-block;
  font-family: 'Inconsolata', Consolas, monospace;
	font-size: 2em;
	color: $text-color;
}
// Typing style
.typing {
  position: relative;
	&::after {
    content: "|";
    position: absolute;
    right: 0;
    width: 100%;
    color: $caret-color;
    background: $bg;
    animation: typing $animation-time steps($text-length) forwards,
      caret 1s infinite;
  }
}
// Animation
@keyframes typing {
	to { width: 0 }
}
@keyframes caret {
	50% { color: transparent }
}
</style>