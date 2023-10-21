import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
	openModal: boolean
}

const initialState: CartState = {
	openModal: false,
}

export const modalSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeOpenModal: state => {
			state.openModal = !state.openModal
		},
	},
})

export const { changeOpenModal } = modalSlice.actions

export default modalSlice.reducer
