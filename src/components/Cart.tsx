import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ICartItem } from '../types/GetCartItem'

const Cart: FC = () => {
	const [count, setCount] = useState(0)

	const client = useQueryClient()

	const getCartItem = useQuery(['get cartItem'], async () => {
		const res = await axios.get<ICartItem[]>('http://localhost:5500/cart')
		return res.data
	})

	const deleteCartItem = useMutation({
		mutationKey: ['delete item'],
		mutationFn: async (id: number | string) => {
			const res = await axios.delete(`http://localhost:5500/cart/${id}`)
			return res.data
		},
		onSuccess: () => {
			client.invalidateQueries(['get cartItem'])
		},
	})

	const totalPrice = getCartItem.data?.reduce((sum, obj) => obj.price + sum, 0)

	const deleteCartItemById = (id: number | string) => {
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

	return (
		<div className='rounded-[20px] bg-white flex flex-col justify-center items-center p-4 z-30'>
			<ToastContainer />
			<h5 className='text-4xl font-bold '>Корзина</h5>
			{getCartItem.data?.map(item => (
				<div
					key={item.id}
					className='w-full flex justify-center items-center m-10'
				>
					<img src={item.image} alt='image' width={80} height={45} />
					<h2 className='ml-4'>{item.title}</h2>
					<button
						onClick={() => setCount(count - 1)}
						className='m-4 border border-red-500 rounded-full w-[25px] flex justify-center items-center text-red-500'
					>
						-
					</button>
					{count}
					<button
						onClick={() => setCount(count + 1)}
						className='m-4 border border-red-500 rounded-full w-[25px] flex justify-center items-center text-red-500'
					>
						+
					</button>
					<span className='ml-4'>{item.price} ₽</span>
					<GrClose
						className='ml-4'
						onClick={() => deleteCartItemById(item.id)}
					/>
				</div>
			))}
			<span>Total Price: {totalPrice}</span>
		</div>
	)
}

export default Cart
