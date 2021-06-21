<template>
  <div class="dashboard-wrapper">
    <AQIDataGrid />
    <AQIGraph />
  </div>
</template>

<script>
import AQIDataGrid from './components/AQIDataGrid'
import AQIGraph from './components/AQIGraph'

export default {
  components: {
    AQIDataGrid,
    AQIGraph
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-wrapper {
    display: block;
  }
</style>