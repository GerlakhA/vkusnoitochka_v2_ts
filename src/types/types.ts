export interface ICartItem {
	id: number
	title: string
	image: string
	price: number
	quantity: number
}

export type ICategory = {
	id: number | string
	title: string
}[]

export interface IDescription {
	id: number
	description: string
	title: string
	image: string
	price: number
}

export interface IProduct {
	id: number
	title: string
	price: number
	image: string
	description: string
	categories: number | string
	size?: string
	quantity: number
}

export interface IOrders {
	id: number
	title: string
	image: string
	price: number
	quantity: number
}
