import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useRef, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import style from '../styles/cart.module.scss'
import { ICartItem } from '../types/types'
import CartItems from './CartItems'

const Cart: FC = ({}) => {
	const { data } = useQuery({
		queryKey: ['get cartItem'],
		queryFn: async () => {
			const res = await axios.get<ICartItem[]>('http://localhost:5500/cart')
			return res.data
		},
	})
	const [open, setOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const totalPrice = data?.reduce(
		(sum, obj) => sum + obj.price * obj.quantity,
		0
	)

	const lengthProducts = data?.reduce((acc, obj) => acc + obj.quantity, 0)

	const handleUpdateDataQuantity = (id: number, operation: string) => {
		data?.map(item => {
			if (item.id === id && operation === 'minus') {
				item.quantity--
			} else {
				if (item.id === id && operation === 'plus') {
					item.quantity++
				}
				console.log(
					`name: ${item.title} price: ${item.quantity * item.price} quantity: ${
						item.quantity
					}`
				)
				return item
			}
		})
	}

	return (
		<>
			<div
				className='relative w-[195px] hover:text-red-500 hover:scale-110
			 hover:font-semibold transition ease-in-out duration-[250ms] mr-[115px]
			 '
			>
				<button
					ref={btnRef}
					onClick={() => setOpen(!open)}
					className='flex items-center justify-center'
				>
					Корзина
				</button>
				<span
					className='absolute w-4 h-4 bg-red-500 rounded-full text-white
				right-0 top-0 flex items-center justify-center text-sm font-semibold'
				>
					{lengthProducts}
				</span>
			</div>
			<Drawer
				isOpen={open}
				placement='right'
				onClose={() => setOpen(!open)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerCloseButton onClick={() => setOpen(!open)} />
					<DrawerHeader>Корзина</DrawerHeader>

					<DrawerBody>
						<div className={style.cart}>
							{data?.length ? (
								data?.map(item => (
									<CartItems
										key={item.id}
										data={item}
										handleUpdateDataQuantity={handleUpdateDataQuantity}
									/>
								))
							) : (
								<div>Кориза пуста</div>
							)}
						</div>
					</DrawerBody>

					<DrawerFooter
						justifyContent={'space-between'}
						className='border-t border-t-neutral-100'
					>
						<div className={style.footer}>
							<div>Общая сумма:</div>
							<div>{totalPrice} RUB.</div>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Cart
