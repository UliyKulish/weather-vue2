<template>
  <div class="weather-info">
    <div class="weather-info__top">
      <div class="weather-info__image">
        <img
          :src="`/img/icons/${weatherInfo.weather[0].description}.svg`"
          :alt="weatherInfo.weather[0].description"
        />
      </div>
      <div class="weather-info__description">
        {{ weatherInfo.weather[0].main }}
      </div>
    </div>
    <div class="weather-info__temp">
      {{ Math.round(weatherInfo?.main?.temp) }} &deg;С
    </div>
    <div
      class="weather-info__show_more"
      v-if="!moreInfo"
      @click="moreInfo = !moreInfo"
    >
      Show more info
    </div>
    <div class="weather-info__details" v-if="moreInfo">
      <div class="weather-info__box">
        <div class="weather-info__label">Feels like:</div>
        <div class="weather-info__velue">
          {{ weatherInfo.main.feels_like }} &deg;С
        </div>
      </div>
      <div class="weather-info__box">
        <div class="weather-info__label">Wind speed:</div>
        <div class="weather-info__velue">{{ weatherInfo.wind.speed }} m/s</div>
      </div>
      <div class="weather-info__box">
        <div class="weather-info__label">Wind deg:</div>
        <div class="weather-info__velue">{{ weatherInfo.wind.deg }} &deg;</div>
      </div>
      <div class="weather-info__box" v-if="weatherInfo.wind.gust">
        <div class="weather-info__label">Wind gusts:</div>
        <div class="weather-info__velue">
          {{ Math.round(weatherInfo.wind.gust) }} m/s
        </div>
      </div>
      <div class="weather-info__box">
        <div class="weather-info__label">Pressure:</div>
        <div class="weather-info__velue">
          {{ convertPressuareToMM(weatherInfo.main.pressure) }} mm
        </div>
      </div>
      <div class="weather-info__box">
        <div class="weather-info__label">Sunrise:</div>
        <div class="weather-info__velue">
          {{ convertTime(weatherInfo.sys.sunrise) }}
        </div>
      </div>
      <div class="weather-info__box">
        <div class="weather-info__label">Sunset:</div>
        <div class="weather-info__velue">
          {{ convertTime(weatherInfo.sys.sunset) }}
        </div>
      </div>
      <div class="weather-info__box">
        <div class="weather-info__label">Cloudiness:</div>
        <div class="weather-info__velue">{{ weatherInfo.clouds.all }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherInfo",
  props: {
    weatherInfo: {
      type: Object,
    },
  },
  data() {
    return {
      moreInfo: false,
    };
  },
  methods: {
    convertPressuareToMM(value) {
      return Math.round(value * 0.7562);
    },
    convertTime(value) {
      return new Date(
        (value + this.weatherInfo.timezone) * 1000
      ).toLocaleTimeString("ru-RU");
    },
  },
};
</script>

<style scoped lang="scss">
.weather-info {
  &__top {
    display: flex;
    align-items: center;
  }
  &__temp {
    font-size: 50px;
    margin-bottom: 15px;
  }
  &__show_more {
    color: #002aa1;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  &__details {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #ccc;
  }
  &__box {
    display: flex;
    align-items: baseline;
    &:not(:last-child) {
      border-bottom: 1px solid #c5c5c5;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
  }
  &__label {
    font-weight: bold;
    margin-right: 5px;
  }
}
</style>
