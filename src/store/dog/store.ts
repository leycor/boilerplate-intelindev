import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type IDogStore } from './types'

const initialData: IDogStore = {
  dog: {
    count: 0,
    title: 'Dog count',
  },
}

export const createDogSlice = () => ({
  ...initialData,
})

// Si quieres persistir el dato utiliza
// const storeWithPersist = persist(bearStore, { name: 'bear' })
// const store = create(devtools(storeWithPersist))

export const useDogStore = create(devtools(createDogSlice, { name: 'dog-store', enabled: true }))
