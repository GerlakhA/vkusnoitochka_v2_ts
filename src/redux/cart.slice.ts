import { createSlice } from '@reduxjs/toolkit'
import { ICartItem } from '../types/GetCartItem'

export interface CartState {
	items: ICartItem[]
}

const initialState: CartState = {
	items: [],
}

export const counterSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: state => {
			state.items
		},
		decrement: state => {
			state.items
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
