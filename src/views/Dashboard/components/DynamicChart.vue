<template>
  <highcharts
    :constructorType="'stockChart'"
    class="hc"
    :options="chartOptions"
    ref="highchart"
  ></highcharts>
</template>

<script>
import {cloneDeep} from 'lodash';

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
        chart: {
          events: {
            load: function(dataPoint, index) {
              // set up the updating of the chart each second
              if (dataPoint && index) {
                console.log('Add Data Point', dataPoint[0], dataPoint[1])
                var series = this.series[index]
                series.addPoint(dataPoint[0], dataPoint[1], true, true)
              }
            }
          }
        },

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
          text: 'Live AQI data'
        },

        exporting: {
          enabled: false
        },

        series: []
      },
      previousSelectedCitiesCount: 0
    }
  },

  computed: {
    citiesThatJustGotUpdated () {
      const citiesUpdated = cloneDeep(this.$store.state.citiesUpdated)
      return this.selectedCities.length && citiesUpdated.filter((city) => this.selectedCities.includes(city.name))
    }
  },

  watch: {
    selectedCities (values) {
      if (this.previousSelectedCitiesCount > values.length) {
        console.log('City just got removed')
        // Remove any city if removed from selection
        const series = cloneDeep(this.chartOptions.series)
        this.chartOptions.series = series.filter((series) => values.includes(series.name))
      } else if (this.previousSelectedCitiesCount < values.length) {
        // Add New Series/Update Existing series data
        console.log('Added New Series')
        this.updateCitiesThatJustGotUpdated()
      }
      this.previousSelectedCitiesCount = values.length
    },
    citiesThatJustGotUpdated () {
      console.log("Watcher citiesThatJustGotUpdated")
      this.updateCitiesThatJustGotUpdated()
    }
  },

  methods: {
    getSeriesDataByCity(city) {
      return this.$store.state.cities[city].series || []
    },

    updateCitiesThatJustGotUpdated() {
      let series = cloneDeep(this.chartOptions.series)
      this.citiesThatJustGotUpdated.forEach((city) => {
        const cityName = city.name
        const data = city.dataPoint
        let found = false
        series.map((currentSeries) => {
          if (currentSeries.name === cityName) {
            found = true
            if (data.length)
              // this.chartOptions.chart.events.load(data, index)
              currentSeries.data.push(data)
            }
          })
          if (!found) {
            // Add Full Series if not already added
            console.log('Not found', {
                name: cityName,
                data: this.getSeriesDataByCity(cityName)
              })
              series.push(
              {
                name: cityName,
                data: this.getSeriesDataByCity(cityName)
              }
            )
          }
      })
      this.chartOptions.series = series
    }
  }
}
</script>

<style></style>
