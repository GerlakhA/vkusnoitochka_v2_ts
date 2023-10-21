import { FC } from 'react'
import { IOrders } from '../types/types'
interface IOrdersItem {
	data: IOrders
}
const OrdersItem: FC<IOrdersItem> = ({ data }) => {
	return (
		<div>
			<img src={data.image} alt={data.title} width={100} height={100} />
			<p>{data.price}</p>
			<span>{data.quantity}</span>
		</div>
	)
}

export default OrdersItem
