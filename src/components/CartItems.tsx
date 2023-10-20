import { Button, HStack } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { toast } from 'react-toastify'
import { ICartItem } from '../types/types'

interface ICartItems {
	data: ICartItem
	handleUpdateQuantity: (id: number, operation: string) => void
}

const CartItems: FC<ICartItems> = ({ data, handleUpdateQuantity }) => {
	const client = useQueryClient()

	const deleteCartItem = useMutation({
		mutationKey: ['delete item', data.id],
		mutationFn: async (id: number) => {
			const res = await axios.delete(`http://localhost:5500/cart/${id}`)
			return res.data
		},
		onSuccess: () => {
			client.invalidateQueries(['get cartItem'])
		},
	})

	const deleteCartItemById = (id: number) => {
		deleteCartItem.mutate(id)
		toast.success('Товар успешно удален из корзины!', {
			autoClose: 2000,
			position: 'top-center',
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	// const clickMinus = (id: number) => {
	// 	setItems(
	// 		items?.map(item => {
	// 			if (item.id === id) {
	// 				item.quantity--
	// 			}
	// 			return item
	// 		})
	// 	)
	// 	// console.log('click', id)
	// }

	// const clickPlus = (id: number) => {
	// 	setItems(
	// 		items?.map(item => {
	// 			if (item.id === id) {
	// 				item.quantity++
	// 			}
	// 			return item
	// 		})
	// 	)
	// 	console.log('click', id)
	// }

	return (
		<div key={data.id}>
			<img src={data.image} alt={data.title} width={100} height={100} />
			<h2>{data.title}</h2>
			<p>{data.price * data.quantity} RUB.</p>
			<HStack>
				<Button
					backgroundColor={'red.400'}
					onClick={() => handleUpdateQuantity(data.id, 'minus')}
				>
					-
				</Button>
				<span>{data.quantity}</span>
				<Button onClick={() => handleUpdateQuantity(data.id, 'plus')}>+</Button>
				<Button variant={'link'} onClick={() => deleteCartItemById(data.id)}>
					Remove
				</Button>
			</HStack>
		</div>
	)
}

export default CartItems
