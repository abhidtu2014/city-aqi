<template>
  <div class="graph-wrapper">
    <div class="graph-header-container">
      <h2 style="text-align: left;">Compare Cities Series Data</h2>
    </div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="5" :lg="4" :xl="2">
        <el-card class="box-card">
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
      </el-col>
      <el-col :xs="4" :sm="6" :md="7" :lg="8" :xl="10">
        <div class="chart-wrapper">
          <DynamicChart :selectedCities="selectedCities" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DynamicChart from "./DynamicChart"

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
      return Object.keys(this.$store.state.cities).map((key) => key) || []
    }
  }
};
</script>

<style lang="scss" scoped>
.graph-wrapper {
  min-height: 400px;
  margin-top: 30px;
}
/deep/ .el-col {
  display: flex;
  align-items: center;
}
</style>
