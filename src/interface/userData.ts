export type TUser = {
  email: string
  exp: number
  iat: number
  name: string
  image: string
  role: string
  _id: string
  isDeleted: boolean
  updatedAt: string
  createdAt: string
  isBlocked: boolean
}

export type TUserRespose = {
  success: boolean
  message: string
  data?: TUser | TUser[]
}
