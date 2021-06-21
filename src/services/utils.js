import constants from './constants'

export function getCategoryByAQI (aqi) {
  if (aqi >= 0 && aqi <= 50) {
    return constants.AQI_CATEGORIES.GOOD
  } else if (aqi > 50 && aqi <= 100) {
    return constants.AQI_CATEGORIES.SATISFACTORY
  } else if (aqi > 100 && aqi <= 200) {
    return constants.AQI_CATEGORIES.MODERATE
  } else if (aqi > 200 && aqi <= 300) {
    return constants.AQI_CATEGORIES.POOR
  } else if (aqi > 300 && aqi <= 400) {
    return constants.AQI_CATEGORIES.VERY_POOR
  } else if (aqi > 400) {
    return constants.AQI_CATEGORIES.SEVERE
  } else {
    console.log("Invalid", aqi)
  }
}