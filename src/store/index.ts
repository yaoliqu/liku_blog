import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './types'

import numFactoryModule from './modules/NumFactory'

export const store = createStore<RootStateTypes>({
  state: {
    text: 'This is Vuex Root.state.text',
    navShow: true
  },
  getters: {},
  mutations: {
    SET_NAV(state, action) {
      state.navShow = action
    }
  },
  actions: {},
  modules: {
    numFactoryModule
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
