import { createStore } from 'vuex'
import about from './modules/about'
import { IGlobalState } from '@/typings/index';


export default createStore<IGlobalState>({
  
  mutations: {
  },
  actions: {
  },
  modules: {
    about
  }
})
