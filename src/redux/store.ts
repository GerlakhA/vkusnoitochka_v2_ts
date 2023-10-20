import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './cart.slice'

export const store = configureStore({
	reducer: {
		cart: CartSlice,
	},
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
