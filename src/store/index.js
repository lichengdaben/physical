import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)
export default new Vuex.Store({
  state () {
    return {
      selectedDistrict:"",
      selectedLibrary:""
    }
  },
  getters: {
  },
  mutations: {
    selectedDistrict (state, val){
      state.selectedDistrict = val;
    },
    selectedLibrary (state, val){
      state.selectedLibrary = val;
    },
  },
  actions: {
  },
  modules: {
    
  }
})




