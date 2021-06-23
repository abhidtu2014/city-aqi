import { isEmpty, cloneDeep } from 'lodash'

export default {
  UPDATE_CITY_DATA (state, data) {
    let cities = cloneDeep(state.cities)
    let currentUpdatedCities = []
    data.forEach((currentData) => {
      // Handle Negative scenarios if any
      if (isEmpty(currentData) || isEmpty(currentData.city)) return

      const {city, aqi} = currentData

      let storedCity = cities[city]
      if (isEmpty(storedCity)) {
        storedCity = initializeCityWithDefault()
      }
      const currentTime = new Date().getTime()
      const updateStoredCity = {
        AQI: aqi,
        maxAQI: Math.max(aqi, storedCity.maxAQI),
        minAQI: Math.min(aqi, storedCity.minAQI),
        lastUpdated: currentTime,
        series: cloneDeep([...storedCity.series, [currentTime, aqi]])
      }
      cities[city] = updateStoredCity
      currentUpdatedCities.push({name: city, dataPoint: [currentTime, aqi]})
    })
    state.cities = cities
    state.citiesUpdated = currentUpdatedCities
  }
}

const initializeCityWithDefault = () => {
  return {
    maxAQI: 0,
    minAQI: 500,
    series: []
  }
}