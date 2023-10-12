import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ICartItem } from '../types/GetCartItem'
import CartItems from './CartItems'

const Cart: FC = () => {
	const { data } = useQuery(['get cartItem'], async () => {
		const res = await axios.get<ICartItem[]>('http://localhost:5500/cart')
		return res.data
	})

	const totalPrice = data?.reduce((sum, obj) => obj.price + sum, 0)

	return (
		<div className='min-h-full min-w-full rounded-[20px] flex flex-col items-center p-4 z-30'>
			<h5 className='text-4xl font-bold '>Корзина</h5>
			<ToastContainer />
			{data?.map(item => (
				<CartItems key={item.id} data={item} />
			))}
			<div className='mt-40'>
				<span>Total Price: {totalPrice}</span>
			</div>
		</div>
	)
}

export default Cart
