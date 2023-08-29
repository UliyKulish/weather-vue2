<template>
  <div class="home">
    <WeatherApp />
  </div>
</template>

<script>
import WeatherApp from "@/components/weather/WeatherApp.vue";
export default {
  name: "HomeView",
  components: {
    WeatherApp,
  },
};
</script>
