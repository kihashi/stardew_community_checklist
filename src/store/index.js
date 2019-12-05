import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import SkillJson from '@/assets/game_data/skills.json'
import SeasonJson from '@/assets/game_data/seasons.json'
import RoomJson from '@/assets/game_data/rooms.json'
import BundleJson from '@/assets/game_data/bundles.json'
import ItemJson from '@/assets/game_data/items.json'

Vue.use(Vuex)

var prestate = {
  seasons: loadSeasons(),
  skills: loadSkills(),
  rooms: loadRooms()
}

prestate.bundles = loadBundles(prestate.rooms)
prestate.items = loadItems(prestate.bundles, prestate.skills, prestate.seasons)

export default new Vuex.Store({
  state: {
    StoredItems: {},
    HideSpoilers: false,
    HideCompleted: false,
    BundleRewardsSpoilers: true,
    ItemInfoSpoilers: true,
    SeasonsSpoilers: true,
    SkillsSpoilers: true,
    CompactView: false
  },
  plugins: [
    createPersistedState({
      reducer: state => (
        {
          StoredItems: state.StoredItems,
          HideSpoilers: state.HideSpoilers,
          HideCompleted: state.HideCompleted,
          BundleRewardsSpoilers: state.BundleRewardsSpoilers,
          ItemInfoSpoilers: state.ItemInfoSpoilers,
          SeasonsSpoilers: state.SeasonsSpoilers,
          SkillsSpoilers: state.SkillsSpoilers,
          CompactView: state.CompactView
        }
      )
    })
  ],
  getters: {
    IsBundleItemRedeemed: (state) => (BundleItem) => {
      return state.StoredItems.hasOwnProperty(BundleItem.id)
    },
    GetBundleById: (state) => (bundleId) => {
      return getById(state.bundles, bundleId)
    },
    GetItemById: (state) => (itemId) => {
      return getById(state.items, itemId)
    },
    GetSerializedState: (state) => {
      return btoa(JSON.stringify(state.StoredItems))
    },
    GetBundleItemsRedeemed: (state, getters) => (bundle) => {
      return Math.min(bundle.items.reduce((redeemded, item) => {
        if (getters.IsBundleItemRedeemed(item)) { redeemded++ }
        return redeemded
      }, 0), bundle.items_required)
    },
    IsBundleComplete: (state, getters) => (bundle) => {
      return getters.GetBundleItemsRedeemed(bundle) >= bundle.items_required
    },
    GetRoomItemsRedeemed: (state, getters) => (room) => {
      return room.bundles.reduce((redeemed, bundle) => {
        return redeemed + getters.GetBundleItemsRedeemed(bundle)
      }, 0)
    },
    IsRoomComplete: (state, getters) => (room) => {
      return getters.GetRoomItemsRedeemed(room) >= room.items_required
    },
    GetOpenBundleItems: (state, getters) => (bundleId, itemId) => {
      return (getters.GetBundleById(bundleId)).items.filter(bundleItem => bundleItem.item.id === itemId && !getters.IsBundleItemRedeemed(bundleItem))
    }
  },
  mutations: {
    SetSerializedState (state, SerializedState) {
      state.StoredItems = JSON.parse(atob(SerializedState))
    },
    RedeemItem (state, BundleItem) {
      Vue.set(state.StoredItems, BundleItem.id, 1)
    },
    UndoRedeemItem (state, BundleItem) {
      Vue.delete(state.StoredItems, BundleItem.id)
    },
    toggleSpoilers (state) {
      state.HideSpoilers = !state.HideSpoilers
    },
    toggleCompleted (state) {
      state.HideCompleted = !state.HideCompleted
    },
    toggleBundleRewards (state) {
      state.BundleRewardsSpoilers = !state.BundleRewardsSpoilers
    },
    toggleItemInfo (state) {
      state.ItemInfoSpoilers = !state.ItemInfoSpoilers
    },
    toggleSeasons (state) {
      state.SeasonsSpoilers = !state.SeasonsSpoilers
    },
    toggleSkills (state) {
      state.SkillsSpoilers = !state.SkillsSpoilers
    },
    toggleCompactView (state) {
      state.CompactView = !state.CompactView
    },
    initState (state) {
      Vue.set(state, 'seasons', prestate.seasons)
      Vue.set(state, 'skills', prestate.skills)
      Vue.set(state, 'rooms', prestate.rooms)
      Vue.set(state, 'bundles', prestate.bundles)
      Vue.set(state, 'items', prestate.items)
    },
    resetData (state) {
      state.StoredItems = {}
    }
  },
  actions: {
    LoadV1State (context, v1state) {
      for (var i = 0; i < v1state.length; i++) {
        for (var j = 0; j < v1state[i].length; j++) {
          var itemId = v1state[i][j].item
          // Patch for duplicate oak
          if (itemId === 116) {
            itemId = 24
          }

          // Patch for parsnip
          if (itemId === 26 && i === 6) {
            itemId = 27
          }
          var bundleItems = context.getters.GetOpenBundleItems(i, itemId)
          if (bundleItems.length > 0) {
            context.commit('RedeemItem', bundleItems[0])
          } else {
            console.log(`Tried to redeem bundle ${i} item ${itemId}, but no open bundle items were found`)
          }
        }
      }
    }
  }
})

function getById (array, id) {
  // eslint-disable-next-line
  return array.find(x => x.id == id)
}

function loadSeasons () {
  return SeasonJson.seasons
}

function loadSkills () {
  return SkillJson.skills
}

function loadRooms () {
  return RoomJson.rooms.map(room => {
    room.bundles = new Array(0)
    room.items_required = 0
    return room
  })
}

function loadBundles (rooms) {
  return BundleJson.bundles.map(bundle => {
    bundle.room = getById(rooms, bundle.room)
    bundle.room.bundles.push(bundle)
    bundle.room.items_required += bundle.items_required
    bundle.items = new Array(0)
    return bundle
  })
}

function loadItems (bundles, skills, seasons) {
  return ItemJson.items.map(item => {
    item.skills = item.skills.map(skill => getById(skills, skill))
    item.seasons = item.seasons.map(season => getById(seasons, season))
    item.bundles.map(bundleItem => {
      bundleItem.bundle = getById(bundles, bundleItem.bundle_id)
      bundleItem.item = item
      bundleItem.bundle.items.push(bundleItem)
      return bundleItem
    })
    return item
  })
}
