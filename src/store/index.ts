import { defineStore } from 'pinia'

import SkillJson from '@/assets/game_data/skills.json'
import SeasonJson from '@/assets/game_data/seasons.json'
import RoomJson from '@/assets/game_data/rooms.json'
import BundleJson from '@/assets/game_data/bundles.json'
import ItemJson from '@/assets/game_data/items.json'

const bundles = BundleJson.bundles
const items = ItemJson.items
const bundleItems = ItemJson.items.flatMap((item) =>
  item.bundles.map((bundle) => ({
    ...bundle,
    item_id: item.id,
    room_id: bundles.find((b) => b.id === bundle.bundle_id)?.room
  }))
)
const skills = SkillJson.skills
const rooms = RoomJson.rooms
const seasons = SeasonJson.seasons

export type Bundle = (typeof bundles)[0]
export type Item = (typeof items)[0]
export type BundleItem = (typeof bundleItems)[0]
export type Room = (typeof rooms)[0]
export type Season = (typeof seasons)[0]
export type Skill = (typeof skills)[0]

export const useGeneralStore = defineStore('general', {
  state: () => ({
    StoredBundleItemIds: {} as { [key: number]: number },
    HideSpoilers: false,
    HideCompleted: false,
    BundleRewardsSpoilers: true,
    ItemInfoSpoilers: true,
    SeasonsSpoilers: true,
    SkillsSpoilers: true,
    CompactView: false,
    bundles,
    items,
    bundleItems,
    seasons,
    skills,
    rooms
  }),
  persist: true,
  getters: {
    getItemById:
      (state) =>
      (itemId: number): Item | undefined =>
        getById(state.items, itemId),
    getBundleById:
      (state) =>
      (bundleId: number): Bundle | undefined =>
        getById(state.bundles, bundleId),
    getRoomById(state) {
      return (roomId: number): Room | undefined => getById(state.rooms, roomId)
    },
    getBundleItemsForItem(state) {
      return (itemId: number): BundleItem[] =>
        state.bundleItems.filter((bundleItem) => bundleItem.item_id === itemId)
    },
    getBundleItemsInBundle(state) {
      return (bundleId: number): BundleItem[] =>
        state.bundleItems.filter((bundleItem) => bundleItem.bundle_id === bundleId)
    },
    getBundleItemsInRoom() {
      return (roomId: number): BundleItem[] =>
        this.getBundlesInRoom(roomId).flatMap((bundle) => this.getBundleItemsInBundle(bundle.id))
    },
    getTotalRoomRequired() {
      return (roomId: number): number =>
        this.getBundlesInRoom(roomId)
          .flatMap((bundle) => bundle.items_required)
          .reduce((room_required, bundle_required) => room_required + bundle_required, 0)
    },
    getBundlesInRoom(state) {
      return (roomId: number): Bundle[] => state.bundles.filter((bundle) => bundle.room === roomId)
    },
    getIncompleteBundleItems(state) {
      return state.bundleItems.filter((bundleItem) => !(bundleItem.id in state.StoredBundleItemIds))
    },
    isBundleItemStored(state) {
      return (bundleItemId: number): boolean => bundleItemId in state.StoredBundleItemIds
    },
    getNumberOfBundleItemsStoredInBundle() {
      return (bundleId: number): number => {
        // FIXME: Need to find a better way of handling undefined here instead of just assigning an arbitrary value
        // Shouldn't even be undefined, but just in case
        const bundleItemsRequired = this.getBundleById(bundleId)?.items_required ?? 100

        return Math.min(
          this.getBundleItemsInBundle(bundleId).filter((bundleItem) =>
            this.isBundleItemStored(bundleItem.id)
          ).length,
          bundleItemsRequired
        )
      }
    },
    getNumberOfRoomItemsStored() {
      return (roomId: number) => {
        const bundlesInRoom = this.getBundlesInRoom(roomId)

        return bundlesInRoom.reduce((stored, bundle) => {
          return stored + this.getNumberOfBundleItemsStoredInBundle(bundle.id)
        }, 0)
      }
    },
    isItemComplete() {
      return (itemId: number): boolean => {
        const item = this.getItemById(itemId)

        if (!item) return false

        const bundleItems = this.getBundleItemsForItem(itemId)
        return bundleItems.every((bundleItem) => this.isBundleItemStored(bundleItem.id))
      }
    },
    isBundleComplete() {
      return (bundleId: number): boolean => {
        return (
          this.getNumberOfBundleItemsStoredInBundle(bundleId) >=
          (this.getBundleById(bundleId)?.items_required ?? 0)
        )
      }
    },
    isRoomComplete() {
      return (roomId: number) =>
        this.getBundlesInRoom(roomId).every((bundle) => this.isBundleComplete(bundle.id))
    },
    getSerializedState: (state) => {
      return btoa(JSON.stringify(state.StoredBundleItemIds))
    }
  },
  actions: {
    setSerializedState(SerializedState: string) {
      this.StoredBundleItemIds = JSON.parse(atob(SerializedState))
    },
    storeItem(bundleItemId: number) {
      this.StoredBundleItemIds[bundleItemId] = 1
    },
    unstoreItem(bundleItemId: number) {
      delete this.StoredBundleItemIds[bundleItemId]
    },
    toggleSpoilers() {
      this.HideSpoilers = !this.HideSpoilers
    },
    toggleCompleted() {
      this.HideCompleted = !this.HideCompleted
    },
    toggleBundleRewards() {
      this.BundleRewardsSpoilers = !this.BundleRewardsSpoilers
    },
    toggleItemInfo() {
      this.ItemInfoSpoilers = !this.ItemInfoSpoilers
    },
    toggleSeasons() {
      this.SeasonsSpoilers = !this.SeasonsSpoilers
    },
    toggleSkills() {
      this.SkillsSpoilers = !this.SkillsSpoilers
    },
    toggleCompactView() {
      this.CompactView = !this.CompactView
    },
    resetData() {
      this.StoredBundleItemIds = {}
    },
    migrateV1StateIfExists() {
      const v1data = localStorage.getItem('user_data')

      if (v1data === null || v1data === '') return

      const v1state = JSON.parse(atob(v1data)) as { item: number }[][]

      for (let bundleId = 0; bundleId < v1state.length; bundleId++) {
        for (let j = 0; j < v1state[bundleId].length; j++) {
          let itemId = v1state[bundleId][j].item
          // Patch for duplicate oak
          if (itemId === 116) {
            itemId = 24
          }
          // Patch for parsnip
          if (itemId === 26 && bundleId === 6) {
            itemId = 27
          }

          const bundleItemsToStore = this.getBundleItemsForItem(itemId)
            .filter((bundleItem) => bundleItem.bundle_id === bundleId)
            .filter((bundleItem) => !this.isBundleItemStored(bundleItem.id))

          if (bundleItemsToStore.length > 0) {
            this.storeItem(bundleItemsToStore[0].id)
          } else {
            console.log(
              `Tried to redeem bundle ${bundleId} item ${itemId}, but no open bundle items were found`
            )
          }
        }
      }

      localStorage.removeItem('user_data')
      localStorage.setItem('v1data', v1data)
    },
    migrateV2StateIfExists() {
      const v2data = localStorage.getItem('vuex')

      console.log(v2data)
      if (v2data === null || v2data === '') return

      const v2state = JSON.parse(v2data)

      this.StoredBundleItemIds = v2state.StoredItems

      localStorage.removeItem('vuex')
      localStorage.setItem('v2data', v2data)
    }
  }
})

function getById<T extends { id: number | string }>(array: T[], id: number | string) {
  return array.find((x) => x.id === id)
}
