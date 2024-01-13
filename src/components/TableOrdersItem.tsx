import { Td, Tr } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import { IOrders } from '../types/types'
interface ITableOrdersItem {
	data: IOrders
}
const TableOrdersItem: FC<ITableOrdersItem> = ({ data }) => {
	const client = useQueryClient()

	const { mutate } = useMutation({
		mutationFn: async (id: number) => {
			const res = await axios.delete(`/orders/${id}`)
			return res.data
		},
		onSuccess: () => {
			client.invalidateQueries(['orders'])
		},
	})

	const deleteOrderItemById = (id: number) => {
		mutate(id)
		toast.success(`заказ номер ${data.id} успешно удален!`, {
			autoClose: 2000,
			position: 'top-center',
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	const currentDate = new Date()
	return (
		<Tr className='relative'>
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
			<button
				onClick={() => deleteOrderItemById(data.id)}
				className='absolute top-[35%] right-9 rounded-full w-10 h-10 border border-red-500 flex items-center justify-center text-red-500
				hover:bg-red-500 hover:text-white transition-colors'
			>
				<IoTrashOutline />
			</button>
		</Tr>
	)
}

export default TableOrdersItem
