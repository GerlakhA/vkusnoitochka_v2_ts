import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ICartItem } from '../types/GetCartItem'

const Cart: FC = () => {
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

	// const onClickPlus = () => {
	// 	setCount(count + 1)
	// 	getCartItem.data?.reduce((sum, obj) => obj.price * count + sum, 0)
	// }

	return (
		<div className='min-h-full min-w-full absolute rounded-[20px] flex flex-col justify-start items-center p-4 z-30'>
			<ToastContainer />
			<h5 className='text-4xl font-bold '>Корзина</h5>
			<div>
				{getCartItem.data?.map(item => (
					<div
						key={`cartItem:${item.id}`}
						className='w-full flex justify-center items-center m-10'
					>
						<img src={item.image} alt='image' width={80} height={45} />
						<h2 className='ml-4'>{item.title}</h2>

						<span className='ml-4'>{item.price} ₽</span>
						<div className='ml-20'>
							<Button
								variant='contained'
								onClick={() => deleteCartItemById(item.id)}
								startIcon={<DeleteIcon />}
								sx={{
									borderRadius: '10px',
								}}
							>
								Delete
							</Button>
						</div>
					</div>
				))}
			</div>
			<span>Total Price: {totalPrice}</span>
		</div>
	)
}

export default Cart
