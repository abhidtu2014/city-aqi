export default {
  getCities (state) {
    return Object.keys(state.cities).map((key) => key)
  },

  getLatestDataCityWise (state) {
    return Object.keys(state.cities).map((key) => {
      const city = state.cities[key];
      return {
        city: key,
        AQI: city.AQI,
        lastUpdated: city.lastUpdated
      }
    })
  }
}