export interface IPayloadLogin {
  email: string
  password: string
  sex: string
  study: string
  message: string
}

export const formLoginInitValue: IPayloadLogin = {
  email: '',
  password: '',
  sex: '',
  study: '',
  message: '',
}
