import { ChangeEvent, FC, createContext, useContext, useState } from 'react'

type MyCustomContextType = {
	categoryId: number
	onClickCategory: (i: number) => void
	onClickSort: (obj: { name: string; sortProperty: string }) => void
	sortId: {
		name: string
		sortProperty: string
	}
	title: string
	changeStateInput: (e: ChangeEvent<HTMLInputElement>) => void
}

interface IUseMyCustomContext {
	children: React.ReactNode
}

export const MyGlobalContext = createContext({} as MyCustomContextType)

export const useGlobalContext = () => useContext(MyGlobalContext)

export const UseMyGlobalContext: FC<IUseMyCustomContext> = ({ children }) => {
	const [categoryId, setCategoryId] = useState(0)
	const [title, setTitle] = useState('')
	const [sortId, setSortId] = useState({
		name: 'по цене',
		sortProperty: 'price',
	})

	const onClickCategory = (i: number) => {
		setCategoryId(i)
	}

	const onClickSort = (obj: { name: string; sortProperty: string }) => {
		setSortId(obj)
	}

	const changeStateInput = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	return (
		<MyGlobalContext.Provider
			value={{
				categoryId,
				onClickCategory,
				onClickSort,
				sortId,
				title,
				changeStateInput,
			}}
		>
			{children}
		</MyGlobalContext.Provider>
	)
}
