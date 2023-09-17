import axios from 'axios'
import { ICartItem } from '../../types/GetCartItem'
import { IProduct } from '../../types/GetProduct.interface'
import { IDescription } from '../../types/Getdescription'

const URL = 'http://localhost:3100'

export const ProductService = {
	async getAllProduct() {
		const res = await axios.get<IProduct[]>(`${URL}/products`)

		return res.data
	},

	async getAllDescription() {
		const res = await axios.get<IDescription[]>(`${URL}/products`)
		return res.data
	},

	async createCartItems(data: { image: string; title: string; price: number }) {
		return await axios.post<ICartItem>('http://localhost:5500/cart', data)
	},
}
