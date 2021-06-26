import { isEmpty } from 'lodash'

export default {
  UPDATE_CITY_DATA (state, data) {
    let cities = state.cities
    let currentUpdatedCities = []
    data.forEach((currentData) => {
      // Handle Negative scenarios if any
      if (!currentData || !currentData.city) return
      let {city, aqi} = currentData
      aqi = Number(parseFloat(aqi).toFixed(2))

      let storedCity = cities[city]
      if (isEmpty(storedCity)) {
        storedCity = initializeCityWithDefault()
      }
      const currentTime = new Date().getTime()
      const updateStoredCity = {
        name: city,
        AQI: aqi,
        maxAQI: Math.max(aqi, storedCity.maxAQI),
        minAQI: Math.min(aqi, storedCity.minAQI),
        lastUpdated: currentTime,
        series: [...storedCity.series, [currentTime, aqi]]
      }
      cities[city] = updateStoredCity
      currentUpdatedCities.push({name: city, dataPoint: [currentTime, aqi]})
    })
    state.cities = Object.assign({}, cities)
    state.citiesUpdated = currentUpdatedCities
  },
  RESET_STORED_DATA (state) {
    state.cities = {},
    state.user = {
      id: '',
      city: ''
    }
    state.citiesUpdated = []
    state.dataLastArchived = new Date().getTime()
  }
}

const initializeCityWithDefault = () => {
  return {
    maxAQI: 0,
    minAQI: 500,
    series: []
  }
}