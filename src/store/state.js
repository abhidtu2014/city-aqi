/**
 * Single Mutation cycle
 cities: {
  'key': {
    AQI: Number
    maxAQI: Number,
    minAQI: Number,
    lastUpdated: Number,
    series: [
      [
        timestamp: new Date (),
        AQI: Number
      ]
    ]
  }
}
citiesUpdated: [{city, data_point}]
*/
export default {
  cities: {},
  user: {
    id: '',
    city: ''
  },
  citiesUpdated: [],
  dataLastArchived: null,
  dataArchivalLimit: 18000000 // 5hrs in ms
}
