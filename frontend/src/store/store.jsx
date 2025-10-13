import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
export const useUserStore = create()(
  persist(
    (set, get) => ({
      jwt: undefined,
      setJWT: (jwt) => set((state) => ({...state, jwt: jwt})),
      clearJWT: () => set((state) => ({...state, jwt: undefined})),
      
    }),
    {
      name: 'user', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is usedcd
    },
  ),
)
