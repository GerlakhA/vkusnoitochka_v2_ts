import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { toast } from 'react-toastify'
import { ICartItem, IProduct } from '../types/types'
import { ProductService } from '../utils/services/Product.service'

interface IDescriptionCard {
	data: IProduct
	open: boolean
	setOpen: (open: boolean) => void
}

const DescriptionCard: FC<IDescriptionCard> = ({ data, open, setOpen }) => {
	const client = useQueryClient()

	const postProduct = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: Omit<ICartItem, 'id'>) =>
			ProductService.createCartItems(data),
		onSuccess: () => {
			client.invalidateQueries(['get cartItem'])
		},
	})

	const addToCart = (data: Omit<ICartItem, 'id'>) => {
		postProduct.mutate(data)
		toast.success(`${data.title} добавлен в корзину.`, {
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
		<Dialog.Root open={open} defaultOpen={open} onOpenChange={setOpen}>
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
					<Dialog.Title className='flex justify-start items-center'>
						<img src={data.image} alt='image' width={120} height={70} />
						<h3 className='text-3xl font-extrabold ml-14'>{data.title}</h3>
					</Dialog.Title>
					<Dialog.Description className='max-h-[300px] overflow-y-auto overflow-hidden mt-4'>
						<div className='w-full p-2 bg-[#f9f9f9] '>
							<span className='opacity-60 text-sm'>Описание:</span>
						</div>
						<p className='p-2'>{data.description}</p>
						<div className='w-full p-2 bg-[#f9f9f9] '>
							<span className='opacity-60 text-sm'>Цена для города:</span>
						</div>
						<p className='p-2'>Москва</p>
						<div>
							<div className='w-full flex flex-col justify-center items-center p-4 bg-[#f9f9f9]'>
								<div className='flex items-center gap-2 w-[90%] bg-[#f4f4f4] rounded-md p-2'>
									<p>В приложении ты можешь заказать этот продукт</p>
								</div>
								<div className='w-full flex justify-center items-center p-4'>
									<p className='text-neutral-500 text-xs'>
										Цены и ассортименты продуктов на сайте указаны для
										выбранного вами региона и могут отличаться в конкретном
										предприятии. Наличие продуктов и цену уточняйте в выбранном
										предприятии.
									</p>
								</div>
							</div>
						</div>
					</Dialog.Description>
					<Dialog.Title>
						<div className='flex flex-col justify-center items-start w-full p-2'>
							<p className='opacity-60'>Сумма</p>
							<div className='flex justify-between items-center w-full'>
								<span className='text-sm font-black'>От {data.price} ₽</span>
								<button
									onClick={() =>
										addToCart({
											title: data.title,
											price: data.price,
											image: data.image,
											quantity: data.quantity,
										})
									}
									className='flex justify-center items-center focus:outline-none bg-green-500 w-[110px]
									p-2 rounded-lg hover:scale-110 transition'
								>
									B корзину
								</button>
							</div>
						</div>
					</Dialog.Title>
					<Dialog.Close asChild>
						<button
							className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
							aria-label='Close'
						>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default DescriptionCard
