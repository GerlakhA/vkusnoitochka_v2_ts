import axios from 'axios'
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
}
