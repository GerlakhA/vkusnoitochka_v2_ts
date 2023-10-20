import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ICartItem } from '../types/types'

export interface CartState {
	items: ICartItem[] | undefined
}

const initialState: CartState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeQuantity: (
			state,
			action: PayloadAction<{ id: number; types: string }>
		) => {
			const { data } = useQuery({
				queryKey: ['get cartItem'],
				queryFn: async () => {
					const res = await axios.get<ICartItem[]>('http://localhost:5500/cart')
					return res.data
				},
			})
			const { id, types } = action.payload
			state.items = data
			const items = state.items?.find(item => item.id === id)
			if (items) types === 'plus' ? items.quantity++ : items.quantity--
			if (items?.quantity && items.quantity < 2) items.quantity = 1
		},
	},
})

export const { changeQuantity } = cartSlice.actions

export default cartSlice.reducer
