import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { ICartItem } from '../types/GetCartItem'

interface ICartImes {
	data: ICartItem
}

const CartItems: FC<ICartImes> = ({ data }) => {
	const [count, setCount] = useState(1)

	const client = useQueryClient()

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

	const clickMinus = () => {
		setCount(count - 1)
		if (count <= 1) return deleteCartItemById(data.id)
	}

	const clickPlus = () => {
		setCount(count + 1)
	}

	return (
		<div className='w-full h-full flex flex-col justify-center items-center'>
			<div className='w-full flex justify-center items-center m-10'>
				<img src={data.image} alt='image' width={80} height={45} />
				<h2 className='ml-4'>{data.title}</h2>
				<div className='flex gap-x-4 justify-center items-center w-[200px]'>
					<button
						onClick={clickMinus}
						className='rounded-full border-red-500 border w-[30px] h-[30px] text-white bg-red-500
          flex justify-center items-center ml-5 gap-x-2 hover:scale-110 transition'
					>
						-
					</button>
					<span className='flex items-center justify-center ml-4'>
						{count} шт.
					</span>
					<button
						onClick={clickPlus}
						className='rounded-full border-red-500 border w-[30px] h-[30px] text-white bg-red-500
          flex justify-center items-center ml-5 gap-x-2 hover:scale-110 transition'
					>
						+
					</button>
				</div>
				<span className='ml-10'>{data.price} ₽</span>
				<div className='ml-10'>
					<Button
						variant='contained'
						onClick={() => deleteCartItemById(data.id)}
						startIcon={<DeleteIcon />}
						sx={{
							borderRadius: '10px',
						}}
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CartItems
