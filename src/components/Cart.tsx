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
import { FC, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { changeOpenModal } from '../redux/modal.slice'
import { TypeRootState } from '../redux/store'
import style from '../styles/cart.module.scss'
import { ICartItem } from '../types/types'
import CartItems from './CartItems'

const Cart: FC = ({}) => {
	const open = useSelector((state: TypeRootState) => state.modal.openModal)
	const dispatch = useDispatch()
	const btnRef = useRef<HTMLButtonElement>(null)

	// const client = useQueryClient()

	const { data } = useQuery({
		queryKey: ['get cartItem'],
		queryFn: async () => {
			const res = await axios.get<ICartItem[]>('http://localhost:5500/cart')
			return res.data
		},
	})

	const totalPrice = data?.reduce(
		(sum, obj) => sum + obj.price * obj.quantity,
		0
	)

	const lengthProducts = data?.reduce((acc, obj) => acc + obj.quantity, 0)

	// const addToOrders = useMutation({
	// 	mutationKey: ['addToOrders'],
	// 	mutationFn: async (data: IOrders) => ProductService.addToOrders(data),
	// 	onSuccess: () => {
	// 		client.invalidateQueries(['orders'])
	// 	},
	// })

	// const ordersItems = (ordersItem: IOrders) => {
	// 	addToOrders.mutate({
	// 		image: ordersItem?.image,
	// 		price: ordersItem?.price,
	// 		quantity: ordersItem?.quantity,
	// 		id: ordersItem?.id,
	// 		title: ordersItem?.title,
	// 	})

	// 	toast.success('Заказ успешно оформлен!')
	// 	console.log(addToOrders?.data)
	// }

	return (
		<>
			<div
				className='relative w-[195px] hover:text-red-500 hover:scale-110
			 hover:font-semibold transition ease-in-out duration-[250ms] mr-[115px]
			 '
			>
				<button
					ref={btnRef}
					onClick={() => dispatch(changeOpenModal())}
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
				onClose={() => dispatch(changeOpenModal())}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerCloseButton onClick={() => dispatch(changeOpenModal())} />
					<DrawerHeader>Корзина</DrawerHeader>

					<DrawerBody>
						<div className={style.cart}>
							{data?.length ? (
								data?.map(item => (
									<CartItems
										key={item.id}
										data={item}
										totalPrice={totalPrice}
									/>
								))
							) : (
								<div className='flex flex-col items-center justify-center gap-y-10 w-full h-full'>
									<p className='text-3xl font-semibold'>Кориза пуста 😔</p>
									<img src='../../src/assets/empty-cart.png' />
									<p>
										Чтобы сделать заказ, перейдите на главную или на страницу{' '}
										<Link
											to={'/menu'}
											onClick={() => dispatch(changeOpenModal())}
											className='text-lg text-blue-600 border-b border-b-blue-600'
										>
											меню.
										</Link>
									</p>
								</div>
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
						<Button colorScheme='green' onClick={() => {}}>
							Checkout
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Cart
