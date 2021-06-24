<template>
  <div class="header-container">
    <h2 class="heading">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  padding: 10px 20px 20px 30px;
  .heading {
    font-size: 22px;
    text-align: left;
    font-weight: bold;
  }
}
</style>
