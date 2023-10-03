export interface IDataLogin {
  id?: number
  name?: string
  ein?: string
  phoneNumber?: string
  firstName: string
  lastName: string
  email?: string
  jwToken?: string
  currentRol?: number
  hasConfigurationCompleted?: boolean
}
export interface IAuthenticate {
  isAuthenticate: boolean
  message: string
  data?: IDataLogin
}
