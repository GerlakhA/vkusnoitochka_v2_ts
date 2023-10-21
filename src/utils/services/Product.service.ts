import axios from 'axios'
import { ICartItem, IDescription, IOrders, IProduct } from '../../types/types'

axios.defaults.baseURL = 'http://localhost:5500'

export const ProductService = {
	async getAllProduct() {
		const res = await axios.get<IProduct[]>(`/products`)

		return res.data
	},

	async getAllDescription() {
		const res = await axios.get<IDescription[]>(`/products`)
		return res.data
	},

	async createCartItems(data: Omit<ICartItem, 'id'>) {
		return await axios.post(`/cart`, data)
	},

	async updateCartItems(data: Omit<ICartItem, 'image' | 'title'>) {
		return await axios.patch(`/cart/${data.id}`, data)
	},

	async deletCartItemById(id: number) {
		const res = await axios.delete(`/cart/${id}`)
		return res.data
	},

	async addToOrders(data: IOrders) {
		return await axios.post(`/orders`, data)
	},

	async getAllOrders() {
		const res = await axios.get<IOrders[]>(`/orders`)
		return res.data
	},
}
