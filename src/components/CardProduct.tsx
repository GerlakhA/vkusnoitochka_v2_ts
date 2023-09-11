import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PacmanLoader } from 'react-spinners'
import { IProduct } from '../types/GetProduct.interface'
const CardProduct = () => {
	const getProduct = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await axios.get<IProduct[]>(`http://localhost:5500/products`)
			return res.data
		},
	})

	console.log(getProduct.data)
	if (getProduct.isLoading)
		return (
			<div className='flex justify-center items-center'>
				<PacmanLoader />
			</div>
		)

	return (
		<div className='flex flex-wrap justify-start items-center w-[1250px] mt-10'>
			{getProduct.data?.map(item => (
				<div
					key={item.id}
					className='w-[282px] h-[394px] p-[20px] shadow-md hover:shadow-xl 
						cursor-pointer flex flex-col justify-start items-center
						m-[10px] rounded-xl relative bg-border_card'
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
