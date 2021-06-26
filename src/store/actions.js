
export default {
  updateCityAQI ({commit, rootState}, data) {
    let dataLastArchived = rootState.dataLastArchived
    if (dataLastArchived && compareDates(dataLastArchived, new Date().getTime(), rootState.dataArchivalLimit)) { // Check whether to archive or not
      commit('RESET_STORED_DATA')
    }
    commit('UPDATE_CITY_DATA', data)
  }
}

function compareDates(t1, t2, timeout) {
  return Math.abs(t1 - t2) >= timeout
}