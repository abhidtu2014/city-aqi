<template>
  <div class="graph-wrapper">
    <div class="graph-card-wrapper">
      <el-card>
        <div slot="header" class="clearfix">
          <span>Cities</span>
          <el-select
            v-model="selectedCities"
            placeholder="Select Cities for comparison"
            size="mini"
            multiple
            filterable
            style="width: 100%; margin-top: 20px;"
          >
            <el-option
              v-for="city in cities"
              :key="city"
              :label="city"
              :value="city"
            >
            </el-option>
          </el-select>
        </div>
      </el-card>
      <div class="chart-wrapper">
        <DynamicChart :selectedCities="selectedCities" />
      </div>
    </div>
  </div>
</template>

<script>
import DynamicChart from "./DynamicChart";

export default {
  components: {
    DynamicChart
  },
  data() {
    return {
      selectedCities: []
    };
  },
  computed: {
    cities() {
      return Object.keys(this.$store.state.cities).map(key => key) || [];
    }
  }
};
</script>

<style lang="scss" scoped>
.graph-wrapper {
  display: flex;
  flex: 1;
  /* margin-top: 20px; */
  flex-direction: column;
  padding: 20px 0 20px;
  .graph-card-wrapper {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    gap: 20px;
  }
}
.chart-wrapper {
  /* min-height: 400px; */
  /* margin-top: 30px; */
  margin-left: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
/deep/ .el-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
/deep/ .el-card__body {
  display: none;
}
/deep/ .el-card__header {
  height: 200px;
  border: none;
}

.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
