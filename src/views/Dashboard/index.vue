<template>
  <div class="dashboard-wrapper">
    <el-timeline>
      <el-timeline-item size="large" placement="top">
        <img
          class="item-icon"
          src="/img/icons/metro-city.webp"
        />
        <el-row>
          <el-col>
            <Heading heading="Metro Cities" />
            <MetroCities />
          </el-col>
        </el-row>
      </el-timeline-item>
      <el-timeline-item size="large" placement="top">
        <img
          class="item-icon"
          src="/img/icons/tabular.webp"
        />
        <el-row>
          <el-col>
            <Heading heading="Tabular Data" />
            <AQIDataGrid />
            <ColorAxis />
          </el-col>
        </el-row>
      </el-timeline-item>
      <el-timeline-item placement="top">
        <img
          class="item-icon"
          src="/img/icons/graph.webp"
        />
        <el-row>
          <el-col>
            <Heading heading="Compare Cities" />
            <AQIGraph />
          </el-col>
        </el-row>
      </el-timeline-item>
      <el-timeline-item placement="top">
        <img
          class="item-icon"
          src="/img/icons/wordcloud.webp"
        />
        <el-row>
          <el-col>
            <Heading heading="Wordcloud" />
            <WordCloud />
          </el-col>
        </el-row>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import AQIDataGrid from "./components/AQIDataGrid";
import AQIGraph from "./components/AQIGraph";
import WordCloud from "./components/WordCloud";
import Heading from "./components/Heading";
import MetroCities from "./components/MetroCities";
import ColorAxis from "./components/ColorAxis";

export default {
  components: {
    AQIDataGrid,
    AQIGraph,
    WordCloud,
    Heading,
    MetroCities,
    ColorAxis
  }
};
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  display: block;
  .standard-aqi-image {
    max-height: 400px;
    max-width: 100%;
  }
}
.item-icon {
  position: absolute;
  top: 0;
  left: 10px;
  height: 48px;
  width: 48px;
}
</style>
