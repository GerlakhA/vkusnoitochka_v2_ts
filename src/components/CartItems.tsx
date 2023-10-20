import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { toast } from 'react-toastify'
import style from '../styles/cart.module.scss'
import { ICartItem } from '../types/types'
import { FormatCurrency } from '../utils/format-currency'
import { ProductService } from '../utils/services/Product.service'
import CartButtons from './CartButtons'

interface ICartItems {
	data: ICartItem
	handleUpdateDataQuantity: (id: number, operation: string) => void
}

const CartItems: FC<ICartItems> = ({ data }) => {
	const client = useQueryClient()

	const deleteCartItem = useMutation({
		mutationKey: ['delete item', data.id],
		mutationFn: async (id: number) => ProductService.deletCartItemById(id),
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

	return (
		<div className={style.item}>
			<img src={data.image} alt={data.title} width={100} height={100} />
			<div className='flex flex-col gap-2'>
				<div className={style.name}>{data.title}</div>
				<div className={style.price}>
					{FormatCurrency(data.price * data.quantity)}
				</div>

				<CartButtons data={data} deleteCartItemById={deleteCartItemById} />
			</div>
		</div>
	)
}

export default CartItems
