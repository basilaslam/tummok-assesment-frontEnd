import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from '../slices/auth.slice'

export interface RootState {
	auth: auth
  }


  type auth = {
	userInfo: string
  }

const store = configureStore({
	reducer: {
		auth: authReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: true
})


export default store