import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/table'
import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { ProductService } from '../utils/services/Product.service'
import TableOrdersItem from './TableOrdersItem'

const Orders = () => {
	const { data, isSuccess, isLoading } = useQuery(['orders'], async () =>
		ProductService.getAllOrders()
	)

	if (isLoading)
		return (
			<div className='flex justify-center items-center'>
				<PacmanLoader />
			</div>
		)

	return (
		<TableContainer padding={120}>
			<Table variant='simple'>
				<TableCaption>Информация о ваших заказах</TableCaption>
				<Thead>
					<Tr>
						<Th>Заказ</Th>
						<Th>Товар</Th>
						<Th>Количество</Th>
						<Th>Цена</Th>
						<Th>Дата покупки</Th>
					</Tr>
				</Thead>
				<Tbody>
					{isSuccess &&
						data.map(item => <TableOrdersItem key={item.id} data={item} />)}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default Orders
