import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'
import { PacmanLoader } from 'react-spinners'
import { IProduct } from '../types/GetProduct.interface'
import { ProductService } from '../utils/services/Product.service'

interface ICardProduct {
	categoryId: number
	searchTitle: string
}

const CardProduct: FC<ICardProduct> = ({ categoryId, searchTitle }) => {
	const [open, setOpen] = useState(false)
	// const [image, setImage] = useState('')
	// const [price, setPrice] = useState(0)
	// const [title, setTitle] = useState('')

	const category = `?categories=${categoryId}`

	const search = `&q=${searchTitle}`

	const client = useQueryClient()

	const getProduct = useQuery({
		queryKey: ['products', categoryId, searchTitle],
		queryFn: async () => {
			const res = await axios.get<IProduct[]>(
				`http://localhost:5500/products${category}${search}`
			)
			return res.data
		},
	})

	const postProduct = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: { image: string; title: string; price: number }) =>
			ProductService.createCartItems(data),
		onSuccess: () => {
			client.invalidateQueries(['products'])
		},
	})

	if (getProduct.isLoading)
		return (
			<div className='flex justify-center items-center'>
				<PacmanLoader />
			</div>
		)

	const popUp = () => {
		setOpen(!open)
	}

	return (
		<div className='flex flex-wrap justify-start items-center w-[1250px] mt-10'>
			{getProduct.data?.map(item => (
				<div
					key={`product:${item.id}`}
					className='w-[282px] h-[394px] p-[20px] shadow-md hover:shadow-lg  
						cursor-pointer flex flex-col justify-start items-center
						m-[10px] rounded-xl relative bg-bg_card z-[1px] border border-solid border-bg_button'
					onClick={popUp}
				>
					<img src={item.image} alt='product' width={242} height={239} />
					<h2>{item.title}</h2>
					<p className='absolute left-5 top-[337px] text-[12px]'>{item.size}</p>
					<p className='absolute left-5 top-[350px] font-bold'>
						от {item.price} ₽
					</p>
					<button
						onClick={() =>
							postProduct.mutate({
								title: item.title,
								price: item.price,
								image: item.image,
							})
						}
						className='absolute right-5 top-[340px] border rounded-lg p-2 bg-orange-500'
					>
						B корзину
					</button>
				</div>
			))}
		</div>
	)
}
export default CardProduct
