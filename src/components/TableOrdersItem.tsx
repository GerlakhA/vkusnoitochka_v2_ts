import { Td, Tr } from '@chakra-ui/react'
import { FC } from 'react'
import { IOrders } from '../types/types'
interface ITableOrdersItem {
	data: IOrders
}
const TableOrdersItem: FC<ITableOrdersItem> = ({ data }) => {
	const currentDate = new Date()
	return (
		<Tr>
			<Td>#{data.id}</Td>
			<Td>
				<div className='flex justify-between items-center w-[250px]'>
					<img src={data.image} alt={data.title} width={85} height={85} />
					<p>{data.title}</p>
				</div>
			</Td>
			<Td>
				<span className='text-xl font-medium ml-10'>{data.quantity}</span>
			</Td>
			<Td>{data.price * data.quantity}</Td>
			<Td>{`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}-${currentDate.getHours()}-${currentDate.getMinutes()}`}</Td>
		</Tr>
	)
}

export default TableOrdersItem
