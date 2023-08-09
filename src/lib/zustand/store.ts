import { create } from 'zustand'

type Store = {
  selectedLocation?: string
  setSelectedLocation: (location?: string) => void
}

export const useStore = create<Store>((set) => ({
  selectedLocation: '',
  setSelectedLocation(location?: string) {
    set((state) => ({
      ...state,
      selectedLocation: location,
    }))
  },
}))
