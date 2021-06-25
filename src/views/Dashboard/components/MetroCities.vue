<template>
  <div class="metro-cities-wrapper">
    <div class="metro-cities-outer-container">
      <div class="metro-cities-inner-container">
        <el-card v-for="city in metroCities" :key="city.name">
          <el-row>
            <el-col>
              <img :src="`/img/icons/city-${city.name.toLowerCase()}.webp`" class="metro-city-icon"/>
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
      cities: ['Delhi', 'Bengaluru', 'Mumbai', 'Kolkata', 'Hyderabad'],
      cityIcons: {
        'Delhi': 'images/Delhi.svg',
        'Bengaluru': '../../../images/Bengaluru.svg',
        'Mumbai': '../../../images/Mumbai.svg',
        'Kolkata': '../../../images/Kolkata.svg',
        'Hyderabad': '../../../images/Hyderabad.svg'
      }
    }
  },
  computed: {
    metroCities () {
      const metroCities = Object.values(this.$store.state.cities).map((city) => {
        return {
          name: city.name,
          AQI: city.AQI,
          icon: this.cityIcons[city.name]
        }
      }).filter((city) => this.cities.includes(city.name)) 
      const defaultView = this.cities.map((city) => {
        return {
          name: city,
          AQI: '-',
          icon: this.cityIcons[city]
        }
      })
      return metroCities.length > 0 ? metroCities : defaultView
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
}
</style>

