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

type Bundle = (typeof bundles)[0]
type Item = (typeof items)[0]
type BundleItem = (typeof bundleItems)[0]
type Room = (typeof rooms)[0]
type Season = (typeof seasons)[0]
type Skill = (typeof skills)[0]

export const useGeneralStore = defineStore('general', {
  state: () => ({
    StoredBundleItemIds: [] as number[],
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
  getters: {
    getItemById:
      (state) =>
      (itemId: number): Item | undefined =>
        state.items.find((item) => item.id === itemId),
    getBundleById:
      (state) =>
      (bundleId: number): Bundle | undefined => {
        return getById(state.bundles, bundleId)
      },
    getRoomById(state) {
      return (roomId: number): Room[] => state.rooms.filter((room) => room.id === roomId)
    },
    getBundleItemsInBundle(state) {
      return (bundleId: number): BundleItem[] =>
        state.bundleItems.filter((bundleItem) => bundleItem.bundle_id === bundleId)
    },
    getBundlesInRoom(state) {
      return (roomId: number): Bundle[] => state.bundles.filter((bundle) => bundle.room === roomId)
    },
    getIncompleteBundleItems(state) {
      return state.bundleItems.filter((bundleItem) =>
        state.StoredBundleItemIds.includes(bundleItem.id)
      )
    },
    isBundleItemStored(state) {
      return (bundleItemId: number): boolean => state.StoredBundleItemIds.includes(bundleItemId)
    },
    getNumberOfBundleItemsStoredInBundle(state) {
      return (bundleId: number): number => {
        return state.StoredBundleItemIds.filter((id) =>
          this.getBundleItemsInBundle(bundleId)
            .map((item) => item.id)
            .includes(id)
        ).length
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
    isBundleComplete() {
      return (bundleId: number): boolean => {
        return (
          this.getNumberOfBundleItemsStoredInBundle(bundleId) >=
          this.getBundleItemsInBundle(bundleId).length
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
      this.StoredBundleItemIds.push(bundleItemId)
    },
    unstoreItem(bundleItemId: number) {
      this.StoredBundleItemIds.filter((item) => item !== bundleItemId)
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
      this.StoredBundleItemIds = []
    },
    loadV1State(v1state: { item: number }[][]) {
      for (let i = 0; i < v1state.length; i++) {
        for (let j = 0; j < v1state[i].length; j++) {
          let itemId = v1state[i][j].item
          // Patch for duplicate oak
          if (itemId === 116) {
            itemId = 24
          }
          // Patch for parsnip
          if (itemId === 26 && i === 6) {
            itemId = 27
          }

          const bundleItems = this.getOpenBundleItems(i, itemId)

          if (bundleItems.length > 0) {
            this.storeItem(bundleItems[0])
          } else {
            console.log(
              `Tried to redeem bundle ${i} item ${itemId}, but no open bundle items were found`
            )
          }
        }
      }
    }
  }
})

function getById<T extends { id: number | string }>(array: T[], id: number | string) {
  return array.find((x) => x.id === id)
}
