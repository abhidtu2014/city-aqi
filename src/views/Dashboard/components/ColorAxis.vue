<template>
  <div class="color-axis">
    <el-row class="color-axis-flex">
      <el-col :span="12" class="el-col-range">
        <div>AQI Classification</div>
      </el-col>
      <el-col :span="12" class="el-col-categories">
        <el-row>
          <el-col>
            <div class="labels">
              <span v-for="range in aqiRange" :key="range">
              {{ range }}
            </span>
            </div>
          </el-col>
          <el-col>
            <ul>
              <span v-for="category in categories" :key="category">
                <el-tooltip class="item" effect="dark" :content="formatter(category)" placement="bottom">
                  <li
                  :class="`category-${category}`"
                ></li>
              </el-tooltip>
              </span>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div>
      
      
    </div>
  </div>
</template>

<script>
import constants from '../../../services/constants/AQICategories'

export default {
  data () {
    return {
      categories: [],
      aqiRange: [0, 50, 100, 200, 300, 400, 500]
    }
  },

  created () {
    this.categories = Object.values(constants.AQI_CATEGORIES).map((category) => category.name)
  },

  methods: {
    formatter (category) {
      return category.split('_').map((word) => word.toLowerCase()).join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.color-axis {
  margin-top: 10px;
}
.color-axis-flex {
  display: flex;
    justify-content: center;
    align-items: center;
}
  .category-GOOD {
    background-color: rgba(85,168,79, 1.0);
  }

  .category-SATISFACTORY {
    background-color:  rgba(163,200,83, 1.0);
  }

  .category-MODERATE {
    background-color: rgba(255,248,51, 1.0);
  }

  .category-POOR {
    background-color: rgba(242,156,51, 1.0);
  }

  .category-VERY_POOR {
    background-color: rgba(233,63,51, 1.0);
  }

  .category-SEVERE {
    background-color: rgba(175,45,36, 1.0);
  }

  ul {
    li {
      display: inline-block;
      width: 20px;
      height: 15px;
      position: relative;

      + li {
        border-left: 1px solid #f6f6f6;
      }
    }
  }

  .labels {
    font-size: 0.7em;
    span + span {
      margin-left: 3px;
    }
  }
  /deep/ .el-col-range {
    text-align: right;
  }
  /deep/ .el-col-categories {
    text-align: left;
    padding-left: 10px;
  }
</style>