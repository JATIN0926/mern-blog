import { configureStore } from '@reduxjs/toolkit'
import  userReducer from "./user/UserSlice.js"
export const store = configureStore({
  reducer: {
    user : userReducer
  },
})