import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type IAuthenticate } from './types'

const initialData: IAuthenticate = {
  isAuthenticate: false,
  message: 'Default Message',
  data: {
    firstName: '',
    lastName: '',
    currentRol: 0,
    email: '',
    name: '',
    ein: '',
    hasConfigurationCompleted: false,
    id: 0,
    jwToken: '',
    phoneNumber: '',
  },
}

export const createUserSlice = () => ({
  ...initialData,
})

// Si quieres persistir el dato utiliza
// const storeWithPersist = persist(bearStore, { name: 'bear' })
// const store = create(devtools(storeWithPersist))

export const useUserStore = create(devtools(createUserSlice, { name: 'user-store', enabled: true }))
