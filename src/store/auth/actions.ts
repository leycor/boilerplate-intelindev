import { produce } from 'immer'
import { type IAuthenticate } from './types'
import { useUserStore } from './store'

// Actions
const { setState } = useUserStore

const userLogin = () => {
  setState(
    produce((state: IAuthenticate) => {
      state.isAuthenticate = true
      state.message = 'User is Login'
      state.data = {
        ...state.data,
        firstName: 'Bryan',
        lastName: 'RIvas',
        currentRol: 1,
        ein: 'ein',
        email: 'bryanjohann1995@gmail.com',
        hasConfigurationCompleted: true,
        id: 1,
        jwToken: '123TOken',
        name: 'Bryan Johann Rivas Suarez',
        phoneNumber: '04143378626',
      }
    }),
    false,
    'LOGIN_USER',
  )
}

export const userActionStore = {
  userLogin,
}
