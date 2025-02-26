import { TUser } from '@/interface/userData'
import { RootState } from '@/Redux/store'
import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
  user: null | TUser
  token: string | null
}

const initialState: TInitialState = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: (state) => {
      state.user = null
      state.token = null
    },
  },
})

export const { setUser, logout } = authSlice.actions

export default authSlice.reducer

export const UseCurrentUser = (state: RootState) => state.auth.user
export const UseCurrentToken = (state: RootState) => state.auth.user
