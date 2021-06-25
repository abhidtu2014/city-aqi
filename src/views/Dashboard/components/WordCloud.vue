<template>
  <div class="wordcloud-wrapper">
    <el-card>
      <highcharts class="hc" :options="chartOptions" ref="highchart"></highcharts>
      <ColorAxis />
    </el-card>
  </div>
</template>

<script>
import ColorAxis from './ColorAxis'

import { getCategoryByAQI } from "../../../services/utils";
// import { cloneDeep } from "lodash";

export default {
  components: {
    ColorAxis
  },
  data() {
    return {
      chartOptions: {
        plotOptions: {
          wordcloud: {
            cursor: "pointer",
            minFontSize: 10,
            maxFontSize: 50,
            rotation: {
              from: 0,
              orientations: 0,
              to: 0
            },
            style: {
              fontStyle: "italic",
              fontWeight: 600
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            type: "wordcloud",
            data: [],
            name: "AQI"
          }
        ],
        title: {
          text: ""
        }
      }
    };
  },

  computed: {
    citiesData() {
      return Object.keys(this.$store.state.cities).map(key => {
        const city = this.$store.state.cities[key];
        const category = getCategoryByAQI(city.AQI);
        return {
          name: key,
          weight: parseInt(city.AQI),
          color: category.colorCode
        };
      });
    }
  },

  watch: {
    citiesData(values) {
      this.chartOptions.series[0].data = [...values];
    }
  }
};
</script>

<style lang="scss" scoped>
  .wordcloud-wrapper {
    max-width: 800px;
    margin: auto;
  }
</style>
