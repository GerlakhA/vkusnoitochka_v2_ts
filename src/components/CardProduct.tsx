import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { PacmanLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGlobalContext } from '../hooks/MyContext'
import { IProduct } from '../types/types'
import CardItems from './CardItems'

interface ICardProduct {
	searchTitle: string
}

const CardProduct: FC<ICardProduct> = ({ searchTitle }) => {
	const { categoryId, sortId } = useGlobalContext()

	const category = `?categories=${categoryId}`

	const search = `&q=${searchTitle}`

	const sortBy = sortId?.sortProperty.replace('-', '')
	const order = sortId?.sortProperty.includes('-') ? 'asc' : 'desc'

	const getProduct = useQuery({
		queryKey: ['products', categoryId, searchTitle, sortId],
		queryFn: async () => {
			const res = await axios.get<IProduct[]>(
				`http://localhost:5500/products${category}${search}&_sort=${sortBy}&_order=${order}`
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

	return (
		<div className='flex flex-wrap justify-start items-center w-full h-full mt-10'>
			<ToastContainer />
			{getProduct.data?.map(item => (
				<CardItems key={item.id} data={item} />
			))}
		</div>
	)
}
export default CardProduct
