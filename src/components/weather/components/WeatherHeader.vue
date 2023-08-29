<template>
  <div class="weather__header">
    <DefaultInput
      v-model="city"
      label="Enter your city"
      :error="!!error"
      @enter="getWeatherFromApi(city)"
    />
  </div>
</template>

<script>
import DefaultInput from "@/components/Form/DefaultInput";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WeatherHeader",
  components: {
    DefaultInput,
  },
  data() {
    return {
      city: "",
    };
  },
  computed: {
    ...mapGetters({
      error: "global/getErrorMsg",
    }),
  },
  methods: {
    ...mapActions({
      getWeatherFromApi: "weather/fetchWeatherInfo",
    }),
  },
};
</script>
