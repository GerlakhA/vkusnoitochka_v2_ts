import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from './modal.slice'

export const store = configureStore({
	reducer: {
		modal: ModalSlice,
	},
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
