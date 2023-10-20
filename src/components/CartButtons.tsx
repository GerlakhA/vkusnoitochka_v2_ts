import { FC } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { ICartItem } from '../types/types'

interface ICartActions {
	data: ICartItem
	// clickPlus: (id: number) => void
	// clickMinus: (id: number) => void
	deleteCartItemById: (id: number) => void
	handleUpdateQuantity: (id: number, operation: string) => void
}

const CartActions: FC<ICartActions> = ({
	data,
	handleUpdateQuantity,
	deleteCartItemById,
}) => {
	const plusQuantity = () => {
		data.quantity++
		console.log(
			`name: ${data.title} price: ${data.quantity * data.price} quantity: ${
				data.quantity
			}`
		)
	}

	const minusQuantity = () => {
		data.quantity--
		console.log(
			`name: ${data.title} price: ${data.quantity * data.price} quantity: ${
				data.quantity
			}`
		)
	}

	const dispatch = useDispatch()
	return (
		<div className='w-[140px] flex justify-between items-center'>
			<button
				onClick={minusQuantity}
				className='rounded-full w-6 h-6 border border-neutral-400 flex items-center justify-center text-xs'
			>
				-
			</button>
			<span>{data.quantity}</span>
			<button
				onClick={plusQuantity}
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
