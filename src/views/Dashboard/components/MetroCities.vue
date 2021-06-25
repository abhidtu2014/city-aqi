<template>
  <div class="metro-cities-wrapper">
    <div class="metro-cities-outer-container">
      <div class="metro-cities-inner-container">
        <el-card v-for="city in metroCities" :key="city.name">
          <el-row>
            <el-col>
              <img :src="city.icon" class="metro-city-icon" :alt="city.name" />
            </el-col>
            <el-col>
              <p>
                {{city.name}}
              </p>
            </el-col>
            <el-col>
              <p>
                {{city.AQI}}
              </p>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cities: {
        'Delhi': {
          name: 'Delhi',
          AQI: '-',
          icon: '/img/icons/city-delhi.webp'
        },
        'Bengaluru': {
          name: 'Bengaluru',
          AQI: '-',
          icon: '/img/icons/city-bengaluru.webp'
        },
        'Mumbai': {
          name: 'Mumbai',
          AQI: '-',
          icon: '/img/icons/city-mumbai.webp'
        },
        'Kolkata': {
          name: 'Kolkata',
          AQI: '-',
          icon: '/img/icons/city-kolkata.webp'
        },
        'Hyderabad': {
          name: 'Hyderabad',
          AQI: '-',
          icon: '/img/icons/city-hyderabad.webp'
        }
      }
    }
  },
  computed: {
    metroCities () {
      return Object.values(this.cities).map((city) => {
        return {
          ...city,
          AQI: this.$store.state.cities[city.name]?.AQI || '-'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.metro-cities-wrapper {
  .metro-cities-outer-container {
    background-color: #FFF;
    border: 1px solid #f6f6f6;
    min-height: 150px;
    .metro-cities-inner-container {
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
      gap: 5px;
    }
  }
  
  .metro-city-icon {
    height: 100px;
    width: 100px;
  }
  p {
    padding: 5px;
    font-size: 1em;
    font-weight: bold;
  }
}
</style>

