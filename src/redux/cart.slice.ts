import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartItem } from '../types/types'

export interface CartState {
	items: ICartItem[] | undefined
}

const initialState: CartState = {
	items: [
		{
			id: 41,
			title: 'Картофель Фри',
			price: 65,
			image:
				'https://vkusnoitochka.ru/resize/484x478/upload/iblock/738/cd5wbp50q12811jgigioi2gi2ty0z40m/large.png',

			quantity: 1,
		},
		{
			id: 42,
			title: 'Картофельные Дольки',
			price: 99,
			image:
				'https://vkusnoitochka.ru/resize/484x478/upload/iblock/5cc/fbttkjji7cqtegmil2qxckf5ws6d0imu/large.png',
			quantity: 1,
		},
	],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeQuantity: (
			state,
			action: PayloadAction<{ id: number; types: string }>
		) => {
			const { id, types } = action.payload
			const items = state.items?.find(item => item.id === id)
			if (items) types === 'plus' ? items.quantity++ : items.quantity--
			if (items?.quantity && items.quantity < 2) items.quantity = 1
		},
	},
})

export const { changeQuantity } = cartSlice.actions

export default cartSlice.reducer
