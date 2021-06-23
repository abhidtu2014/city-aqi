<template>
  <highcharts
    :constructorType="'stockChart'"
    class="hc"
    :options="chartOptions"
    ref="highchart"
  ></highcharts>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  props: {
    selectedCities: {
      default: () => [],
      required: true,
      type: Array
    }
  },

  data() {
    return {
      chartOptions: {
        time: {
          useUTC: false
        },

        credits: {
          enabled: false
        },

        plotOptions: {
          line: {
            marker: { enabled: false }
          }
        },

        // rangeSelector: {
        //   buttons: [
        //     {
        //       count: 1,
        //       type: 'minute',
        //       text: '1M'
        //     },
        //     {
        //       count: 60,
        //       type: 'Hour',
        //       text: '1HR'
        //     },
        //     {
        //       type: 'all',
        //       text: 'All'
        //     }
        //   ],
        //   inputEnabled: false,
        //   selected: 0
        // },

        title: {
          text: "Live AQI data"
        },

        exporting: {
          enabled: true
        },

        series: []
      },
      previousSelectedCitiesCount: 0, // To limit unneccessary re-render
      seriesIndexMap: {} // Map to achieve O(1) insertion and deletion in series Data
    };
  },

  computed: {
    citiesThatJustGotUpdated() {
      return (
        this.selectedCities.length &&
        this.$store.state.citiesUpdated.filter(city =>
          this.selectedCities.includes(city.name)
        )
      );
    }
  },

  watch: {
    selectedCities(values) {
      if (this.previousSelectedCitiesCount > values.length) {
        // Remove any city if removed from selection
        this.removeUnselectedCityFromSeries(values)
      } else if (this.previousSelectedCitiesCount < values.length) {
        // Add New Series/Update Existing series data
        this.updateCitiesThatJustGotUpdated();
      }
      this.previousSelectedCitiesCount = values.length;
    },
    citiesThatJustGotUpdated(values) {
      values?.length && this.updateCitiesThatJustGotUpdated();
    }
  },

  methods: {
    getSeriesDataByCity(city) {
      return this.$store.state.cities[city].series || [];
    },

    updateCitiesThatJustGotUpdated() {
      let series = cloneDeep(this.chartOptions.series);
      this.citiesThatJustGotUpdated.forEach(city => {
        const cityName = city.name;
        const data = city.dataPoint;
        if (this.seriesIndexMap[cityName]) { // O(1) Insertion
          const seriesIndex = this.seriesIndexMap[cityName]
          series[seriesIndex].data.push(data)
        } else {
          // Add Full Series if not already added O(1) Insertion
          this.seriesIndexMap[cityName] = series.length
          series.push({
            name: cityName,
            data: this.getSeriesDataByCity(cityName)
          });
        }
      });
      this.chartOptions.series = series;
    },

    removeUnselectedCityFromSeries (values) {
      this.chartOptions.series = this.chartOptions.series.filter(series => {
          const found = values.includes(series.name)
          if (!found) {
            // remove series Index from map
            delete this.seriesIndexMap[series.name]
          }
          return found
      });
    }
  }
};
</script>

<style></style>
