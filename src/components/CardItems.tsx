import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { IProduct } from '../types/GetProduct.interface'
import { ProductService } from '../utils/services/Product.service'
import DescriptionCard from './DescriptionCard'

interface ICardItems {
	data: IProduct
}

const CardItems: FC<ICardItems> = ({ data }) => {
	const [open, setOpen] = useState(false)

	const client = useQueryClient()

	const postProduct = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: { image: string; title: string; price: number }) =>
			ProductService.createCartItems(data),
		onSuccess: () => {
			client.invalidateQueries(['products'])
		},
	})

	const addToCart = (data: { image: string; title: string; price: number }) => {
		postProduct.mutate(data)
		toast.success('Товар добавлен в корзину', {
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
		<div
			className='w-[282px] h-[394px] p-[20px] shadow-md hover:shadow-lg  
			cursor-pointer flex flex-col justify-start items-center
			m-[10px] rounded-xl relative bg-bg_card border border-solid border-bg_button'
		>
			<div onClick={() => setOpen(!open)}>
				<img src={data.image} alt='product' width={242} height={239} />
				<h2>{data.title}</h2>
				<p className='absolute left-5 top-[337px] text-[12px]'>{data.size}</p>
				<p className='absolute left-5 top-[350px] font-bold'>
					от {data.price} ₽
				</p>
			</div>
			<button
				onClick={() =>
					addToCart({
						title: data.title,
						price: data.price,
						image: data.image,
					})
				}
				className='absolute right-5 top-[340px] border rounded-lg p-2 bg-orange-500'
			>
				B корзину
			</button>

			{open && <DescriptionCard data={data} />}
		</div>
	)
}

export default CardItems
