<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      max-height="400"
      style="width: 100%"
      :header-row-style="{ 'font-weight': 'bold', 'color': '#000' }"
      >
      <el-table-column
        prop="city"
        label="CITY"
        :min-width="20">
      </el-table-column>
      <el-table-column
        prop="AQI"
        label="AQI"
        :min-width="20"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="lastUpdated"
        label="LAST UPDATED"
        :min-width="30"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        label="CATEGORY"
        :min-width="30"
        :filters="tableFilters"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :color="getCategoryByAQIWrapper(scope.row).colorCode"
            disable-transitions>{{ getCategoryByAQIWrapper(scope.row).label }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment'
import { getCategoryByAQI } from '../../../services/utils'

export default {
  data () {
    return {
      tableFilters: [
        {
          value: 'GOOD',
          text: 'Good'
        },
        {
          value: 'MODERATE',
          text: 'Moderate'
        },
        {
          value: 'SATISFACTORY',
          text: 'Satisfactory'
        },
        {
          value: 'POOR',
          text: 'Poor'
        },
        {
          value: 'VERY_POOR',
          text: 'Very Poor'
        },
        {
          value: 'SEVERE',
          text: 'Severe'
        },
      ]
    }
  },
  computed: {
    tableData () {
      return Object.values(this.$store.state.cities).map((city) => {
        return {
          city: city.name,
          AQI: city.AQI,
          lastUpdated: city.lastUpdated
        }
      })
    }
  },

  methods: {
    formatter(row) {
      return moment(row.lastUpdated).fromNow()
    },
    getCategoryByAQIWrapper (row) {
      return getCategoryByAQI(row.AQI)
    },
    tableRowClassName({row}) {
      return getCategoryByAQI(row.AQI).name || ''
    },
    filterTag(value, row) {
      return getCategoryByAQI(row.AQI).name === value
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-container {
    display: flex;
    min-height: 400px;
    margin: auto;
    max-width: 800px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  /deep/ .el-tag {
    color: #000;
  }

</style>