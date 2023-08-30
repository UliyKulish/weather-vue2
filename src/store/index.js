import Vue from "vue";
import Vuex from "vuex";
import weather from "@/store/modules/weather.module";
import globalModule from "@/store/modules/global.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: globalModule,
    weather,
  },
});
