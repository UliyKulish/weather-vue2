import { API_KEY, UNITS } from "@/helpers/constants";
import axios from "@/api/api";

export default {
  async getWeatherInfoByCity(city) {
    try {
      const res = await axios.get(`?q=${city}&units=${UNITS}&appid=${API_KEY}`);
      return res?.data;
    } catch (e) {
      throw new Error(e);
    }
  },
};
