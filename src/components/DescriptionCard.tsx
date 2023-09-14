import { FC } from 'react'

interface IDescriptionCard {
	id: number | string
	description: string
	image: string
	title: string
	price: number
}

const DescriptionCard: FC<IDescriptionCard> = ({
	id,
	description,
	image,
	title,
	price,
}) => {
	// const { data } = useQuery(['description'], async () => {
	// 	const res = await axios.get<IDescription[]>(
	// 		`http://localhost:5500/products?${id}`
	// 	)
	// 	return res.data
	// })

	return (
		<div className='h-[750px] w-[1470px] bg-black z-10 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
			{/* {data?.map(item => ( */}
			<div
				key={`descrition:${id}`}
				className='h-[747px] w-[500px] bg-white z-50'
			>
				<img src={image} />
				<h2>{title}</h2>
				<div>
					<p>Описание</p>
				</div>
				<div>{description}</div>
				<div>
					<p>Цена для города</p>
				</div>
				<div>
					<p>Москва</p>
				</div>
				<span>{price}</span>
			</div>
			{/* ))} */}
		</div>
	)
}

export default DescriptionCard
