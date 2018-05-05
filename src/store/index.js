import Vue from 'vue'
import Vuex from 'vuex'

import SkillJson from '@/assets/game_data/skills.json'
import SeasonJson from '@/assets/game_data/seasons.json'
import RoomJson from '@/assets/game_data/rooms.json'
import BundleJson from '@/assets/game_data/bundles.json'
import ItemJson from '@/assets/game_data/items.json'

Vue.use(Vuex)

var state = {
  StoredItems: {},
  seasons: loadSeasons(),
  skills: loadSkills(),
  rooms: loadRooms()
}

state.bundles = loadBundles(state.rooms)
state.items = loadItems(state.bundles, state.skills, state.seasons)

export default new Vuex.Store({
  state: state,
  getters: {
    IsBundleItemRedeemed: (state) => (BundleItem) => {
      return state.StoredItems.hasOwnProperty(BundleItem.id)
    },
    GetBundleById: (state) => (bundleId) => {
      return getById(state.bundles, bundleId)
    },
    GetItemById: (state) => (itemId) => {
      return getById(state.items, itemId)
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

function getById (array, id) {
  return array.find(x => x.id === id)
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
