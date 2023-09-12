import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { IDescription } from '../types/Getdescription'

interface IDescriptionCard {
	// id: number | string
}

const DescriptionCard: FC<IDescriptionCard> = () => {
	const { data } = useQuery(['description'], async () => {
		const res = await axios.get<IDescription[]>(
			`http://localhost:5500/products/`
		)
		return res.data
	})

	return (
		<div className='h-screen w-full bg-overlay z-10'>
			{data?.map(item => (
				<div key={`descrition:${item.id}`} className='h-[747px] w-[500px]'>
					<img src={item.image} />
					<h2>{item.title}</h2>
					<div>
						<p>Описание</p>
					</div>
					<div>{item.description}</div>
					<div>
						<p>Цена для города</p>
					</div>
					<div>
						<p>Москва</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default DescriptionCard
