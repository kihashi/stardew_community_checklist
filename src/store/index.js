import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    StoredItems: {}
  },
  getters: {
    IsBundleItemRedeemed: (state) => (BundleItem) => {
      return state.StoredItems.hasOwnProperty(BundleItem.id)
    }
  },
  mutations: {
    RedeemItem (state, BundleItem) {
      Vue.set(state.StoredItems, BundleItem.id, 1)
    },
    UndoRedeemItem (state, BundleItem) {
      Vue.delete(state.StoredItems, BundleItem.id)
    }
  }
})
