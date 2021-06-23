
export default {
  updateCityAQI ({commit}, data) {
    // Apply Batching here
    
    commit('UPDATE_CITY_DATA', data)
  }
}