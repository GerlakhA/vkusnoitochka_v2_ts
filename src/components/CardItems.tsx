import { FC, useState } from 'react'
import { IProduct } from '../types/GetProduct.interface'
import DescriptionCard from './DescriptionCard'

interface ICardItems {
	data: IProduct
}

const CardItems: FC<ICardItems> = ({ data }) => {
	const [open, setOpen] = useState(false)

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

			{open && <DescriptionCard data={data} open={open} setOpen={setOpen} />}
		</div>
	)
}

export default CardItems
