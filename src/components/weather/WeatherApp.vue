<template>
  <div class="weather-box">
    <WeatherHeader />
    <div v-if="loading" class="weather-box__loader">Loading...</div>
    <template v-else-if="weatherInfo">
      <WeatherInfo :weatherInfo="weatherInfo" />
    </template>
    <template v-else>
      <div class="weather-box__error" v-if="error">{{ error.message }}</div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WeatherHeader from "@/components/weather/components/WeatherHeader.vue";
import WeatherInfo from "@/components/weather/components/WeatherInfo.vue";
export default {
  name: "WeatherApp",
  components: {
    WeatherHeader,
    WeatherInfo,
  },
  computed: {
    ...mapGetters({
      weatherInfo: "weather/getWeatherInfo",
      error: "global/getErrorMsg",
      loading: "global/loading",
    }),
  },
};
</script>

<style lang="scss">
.weather-box {
  width: 100%;
  padding: 30px;
  background: #fff;
  border-radius: 30px;
  max-width: 750px;
  &__error {
    text-align: center;
    text-transform: uppercase;
    padding-top: 30px;
    color: #a80303;
  }
  &__loader {
    margin-top: 15px;
  }
}
</style>
