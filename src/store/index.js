import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    StoredItems: {}
  },
  getters: {
    IsBundleItemRedeemed: (state) => (BundleItem) => {
      return state.StoredItems[BundleItem.bundle.id].hasOwnProperty(BundleItem.item.id)
    }
  },
  mutations: {
    RedeemItem (state, BundleItem) {
      state.StoredItems[BundleItem.bundle.id][BundleItem.item.id] = 1
    },
    UndoRedeemItem (state, BundleItem) {
      delete state.StoredItems[BundleItem.bundle.id][BundleItem.item.id]
    },
    AddBundles (state, Bundles) {
      for (let bundle of Bundles) {
        state.StoredItems.set(bundle.id, {})
      }
    }
  }
})
