import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { ProductService } from '../utils/services/Product.service'
import OrdersItem from './OrdersItem'

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
		<div>
			{isSuccess && data?.map(item => <OrdersItem key={item.id} data={item} />)}
		</div>
	)
}

export default Orders
