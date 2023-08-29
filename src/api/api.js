import Axios from "axios";
import { BASE_URL } from "@/helpers/constants";
import store from "@/store";

const axios = Axios.create({ baseURL: BASE_URL });

axios.interceptors.request.use((request) => {
  store.commit("global/setLoading", true);
  store.commit("global/setError", null);
  return request;
});
axios.interceptors.response.use(
  (response) => {
    store.commit("global/setLoading", false);
    return response;
  },
  (e) => {
    handleError(e);
  }
);
export const handleError = (e) => {
  store.commit("global/setError", e.response?.data || "Something went wrong");
  store.commit("global/setLoading", false);
};
export default axios;
