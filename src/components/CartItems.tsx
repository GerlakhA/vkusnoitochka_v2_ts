import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import style from '../styles/cart.module.scss'
import { ICartItem } from '../types/GetCartItem'

interface ICartImes {
	data: ICartItem
	// count: number
	// setCount: (count: number) => void
}

const CartItems: FC<ICartImes> = ({ data }) => {
	const [count, setCount] = useState(1)
	// const [value, setValue] = useState('')

	// const getCartItem = useQuery(['get cartItem'], async () => {
	// 	const res = await axios.get<ICartItem[]>('http://localhost:5500/cart')
	// 	return res.data
	// })

	// const totalPriceItem = getCartItem.data?.reduce(
	// 	(sum, obj) => sum + obj.price * count,
	// 	0
	// )

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
		if (count < 2) return deleteCartItemById(data.id)
	}

	const clickPlus = () => {
		setCount(count + 1)
	}

	return (
		<div className={style.item}>
			<img src={data.image} alt={data.title} width={100} height={100} />
			<div className='flex flex-col'>
				<div className={style.name}>{data.title}</div>
				<div className={style.price}>
					{new Intl.NumberFormat('ru-RU', {
						style: 'currency',
						currency: 'RUB',
						currencyDisplay: 'code',
					}).format(data.price * count)}
				</div>
				<div className='w-[90px] flex justify-between items-center'>
					<button
						onClick={clickMinus}
						className='rounded-full w-6 h-6 border border-neutral-400 flex items-center justify-center'
					>
						-
					</button>
					<span>{count}</span>
					<button
						onClick={clickPlus}
						className='rounded-full w-6 h-6 border border-neutral-400 flex items-center justify-center'
					>
						+
					</button>
				</div>
				<div className='mt-2 items-center text-red-500 hover:scale-110 hover:font-semibold ease-in-out transition duration-[250ms]'>
					<button onClick={() => deleteCartItemById(data.id)}>Remove</button>
				</div>
			</div>
		</div>
	)
}

export default CartItems
