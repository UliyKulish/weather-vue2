export default {
  namespaced: true,
  state: {
    loading: false,
    error: "",
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  getters: {
    loading: (state) => state.loading,
    getErrorMsg: (state) => state.error,
  },
};
