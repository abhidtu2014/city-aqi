/**
 * Single Mutation cycle
 cities: {
  'key': {
    AQI: Number
    maxAQI: Number,
    minAQI: Number,
    lastUpdated: Number,
    series: [
      {
        AQI: Number,
        timestamp: new Date ()
      }
    ]
  }
}
Alternative of using cloneDeep, two mutation cycles
{
  'cities': {},
  `series-${city}`: []
}
 */
export default {
  cities: {},
  user: {
    id: '',
    city: ''
  }
}
