import api from "@/api";
const state = {
  weatherInfo: "",
};
const mutations = {
  setWeatherInfo(state, weatherInfo) {
    state.weatherInfo = weatherInfo;
  },
};
const actions = {
  async fetchWeatherInfo({ commit }, city) {
    const weatherInfo = await api.weather.getWeatherInfoByCity(city);
    commit("setWeatherInfo", weatherInfo);
  },
};
const getters = {
  getWeatherInfo(state) {
    return state.weatherInfo;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
