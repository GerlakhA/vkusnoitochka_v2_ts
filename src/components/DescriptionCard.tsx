import { FC } from 'react'
import { IProduct } from '../types/GetProduct.interface'

interface IDescriptionCard {
	data: IProduct
}

const DescriptionCard: FC<IDescriptionCard> = ({ data }) => {
	return (
		<div className='w-full h-full bg-black z-10 bg-opacity-25 backdrop-blur-sm'>
			<div className='h-[747px] w-[500px] bg-white z-50'>
				<img src={data.image} />
				<h2>{data.title}</h2>
				<div>
					<p>Описание</p>
				</div>
				<div>{data.description}</div>
				<div>
					<p>Цена для города</p>
				</div>
				<div>
					<p>Москва</p>
				</div>
				<span>{data.price}</span>
			</div>
		</div>
	)
}

export default DescriptionCard
