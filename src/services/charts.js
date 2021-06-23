import Vue from "vue";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import Stock from "highcharts/modules/stock";
import loadWordCloud from 'highcharts/modules/wordcloud'

Stock(Highcharts)
loadWordCloud(Highcharts)

Vue.use(HighchartsVue, { Highcharts })

export default Highcharts
