import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { type IBearStore } from './types'

const initialData: IBearStore = {
  bear: {
    count: 0,
    title: 'Bear count',
  },
}

export const createBearSlice = () => ({
  ...initialData,
})

// Si quieres persistir el dato utiliza
// const storeWithPersist = persist(bearStore, { name: 'bear' })
// const store = create(devtools(storeWithPersist))

export const useBearStore = create(devtools(createBearSlice, { name: 'bear-store', enabled: true }))
