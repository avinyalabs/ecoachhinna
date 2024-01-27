import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type loadedType = {
  loaded: boolean
  setLoaded: (loaded: boolean) => void
}

export const useLoaded = create<loadedType>()(
  persist(
    (set) => ({
      loaded: false,
      setLoaded: (loaded) => set({ loaded }),
    }),
    {
      name: '__loaded',
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
