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
import { ICartItem } from '../types/GetCartItem'
import CartItems from './CartItems'

const Cart: FC = () => {
	// const { count, setCount } = useGlobalContext()
	const [count, setCount] = useState(0)
	const [open, setOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)
	const { data } = useQuery(['get cartItem'], async () => {
		const res = await axios.get<ICartItem[]>('http://localhost:5500/cart')
		return res.data
	})

	// const totalPrice = data?.reduce((sum, obj) => sum + obj.price * count, 0)

	return (
		<>
			<div
				className='relative w-[185px] hover:text-red-500 hover:scale-110
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
					className='absolute w-5 h-5 bg-red-500 rounded-full text-white
				right-0 top-0 flex items-center justify-center text-sm font-semibold'
				>
					{count}
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
							{data?.map(item => (
								<CartItems key={item.id} data={item} />
							))}
						</div>
					</DrawerBody>

					<DrawerFooter>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Cart
