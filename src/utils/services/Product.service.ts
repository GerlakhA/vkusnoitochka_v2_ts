import axios from 'axios'
import { IProduct } from '../../types/GetProduct.interface'

const URL = 'http://localhost:3100/products'

export const ProductService = {
	async getAllProduct() {
		const res = await axios.get<IProduct[]>(URL)

		return res.data
	},
}
