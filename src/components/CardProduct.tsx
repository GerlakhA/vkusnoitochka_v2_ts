import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'
import { PacmanLoader } from 'react-spinners'
import { IProduct } from '../types/GetProduct.interface'

interface ICardProduct {
	categoryId: number
}

const CardProduct: FC<ICardProduct> = ({ categoryId }) => {
	const [open, setOpen] = useState(false)

	const category = categoryId > 0 ? `?categories=${categoryId}` : ''

	const getProduct = useQuery({
		queryKey: ['products', categoryId],
		queryFn: async () => {
			const res = await axios.get<IProduct[]>(
				`http://localhost:5500/products${category}`
			)
			return res.data
		},
	})

	if (getProduct.isLoading)
		return (
			<div className='flex justify-center items-center'>
				<PacmanLoader />
			</div>
		)

	const popUp = () => {
		setOpen(true)
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
				</div>
			))}
		</div>
	)
}

export default CardProduct
