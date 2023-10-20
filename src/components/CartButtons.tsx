import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { ICartItem } from '../types/types'
import { ProductService } from '../utils/services/Product.service'

interface ICartActions {
	data: ICartItem
	deleteCartItemById: (id: number) => void
}

const CartActions: FC<ICartActions> = ({ data, deleteCartItemById }) => {
	const client = useQueryClient()
	const changeQuantity = useMutation({
		mutationKey: ['changeQuantity', data.price, data.quantity],
		mutationFn: (data: Omit<ICartItem, 'image' | 'title'>) =>
			ProductService.updateCartItems(data),
		onSuccess: () => {
			client.invalidateQueries(['get cartItem'])
		},
	})

	const clickPlus = (data: Omit<ICartItem, 'image' | 'title'>) => {
		changeQuantity.mutate(data)
	}

	const clickMinus = (data: Omit<ICartItem, 'image' | 'title'>) => {
		if (data.quantity < 1) return deleteCartItemById(data.id)
		changeQuantity.mutate(data)
	}

	return (
		<div className='w-[140px] flex justify-between items-center'>
			<button
				onClick={() =>
					clickMinus({
						price: data.price,
						id: data.id,
						quantity: data.quantity - 1,
					})
				}
				className='rounded-full w-6 h-6 border border-neutral-400 flex items-center justify-center text-xs'
			>
				-
			</button>
			<span>{data.quantity}</span>
			<button
				onClick={() =>
					clickPlus({
						price: data.price,
						id: data.id,
						quantity: data.quantity + 1,
					})
				}
				className='rounded-full w-6 h-6 border border-neutral-400 flex items-center justify-center text-xs'
			>
				+
			</button>
			<button
				onClick={() => deleteCartItemById(data.id)}
				className='rounded-full w-6 h-6 border border-neutral-400 flex items-center justify-center text-red-500'
			>
				<IoTrashOutline />
			</button>
		</div>
	)
}

export default CartActions
