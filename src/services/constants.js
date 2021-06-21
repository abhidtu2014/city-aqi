export default {
  AQI_CATEGORIES: {
    GOOD: {
      range: {
        min: 0,
        max: 50
      },
      name: 'GOOD',
      label: 'good',
      colorCode: '#55a84f'
    },
    SATISFACTORY: {
      range: {
        min: 51,
        max: 100
      },
      name: 'SATISFACTORY',
      label: 'satisfactory',
      colorCode: '#a3c853'
    },
    MODERATE: {
      range: {
        min: 101,
        max: 200
      },
      name: 'MODERATE',
      label: 'moderate',
      colorCode: '#fff833'
    },
    POOR: {
      range: {
        min: 201,
        max: 300
      },
      name: 'POOR',
      label: 'poor',
      colorCode: '#f29c33'
    },
    VERY_POOR: {
      range: {
        min: 301,
        max: 400
      },
      name: 'VERY_POOR',
      label: 'very poor',
      colorCode: '#e93f33'
    },
    SEVERE: {
      range: {
        min: 401,
        max: 500
      },
      name: 'SEVERE',
      label: 'severe',
      colorCode: '#af2d24'
    }
  }
}