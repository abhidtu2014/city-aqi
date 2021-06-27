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
            marker: { enabled: true }
          }
        },

        title: {
          text: "Select cities from Dropdown to compare"
        },

        series: []
      },
      previousSelectedCitiesCount: 0 // To limit unneccessary re-render
    };
  },

  computed: {
    citiesThatJustGotUpdated() {
      return (
        this.selectedCities.length ?
          this.$store.state.citiesUpdated.filter(city =>
          this.selectedCities.includes(city.name)
        ): []
      );
    }
  },

  watch: {
    async citiesThatJustGotUpdated() {
      if (this.previousSelectedCitiesCount > this.selectedCities.length) {
        await this.removeUnselectedCityFromSeries(this.selectedCities);
      }
      if (this.previousSelectedCities !== this.selectedCities.length) { // Update Only when required
        this.previousSelectedCitiesCount = this.selectedCities.length;
      }
      await this.updateCitiesThatJustGotUpdated();
    }
  },

  methods: {
    getSeriesDataByCity(city) {
      return cloneDeep(this.$store.state.cities[city].series) || [];
    },

    updateCitiesThatJustGotUpdated() {
      return new Promise(resolve => {
        let series = cloneDeep(this.chartOptions.series);
        this.citiesThatJustGotUpdated.forEach(city => {
          const cityName = city.name;
          const data = city.dataPoint;
          const storedSeriesIndex = this.doesCitySeriesExist(cityName)
          if (storedSeriesIndex > -1) {
            series[storedSeriesIndex].data.push(data);
          } else {
            series.push({
              name: cityName,
              data: this.getSeriesDataByCity(cityName)
            });
          }
        });
        this.chartOptions.series = series;
        resolve(true);
      });
    },

    removeUnselectedCityFromSeries() {
      return new Promise(resolve => {
        this.chartOptions.series = this.chartOptions.series.filter(series => this.selectedCities.includes(series.name));
        resolve(true);
      });
    },

    doesCitySeriesExist(cityName) {
      return this.chartOptions.series.findIndex(series => series.name === cityName)
    }
  }
};
</script>

<style></style>
