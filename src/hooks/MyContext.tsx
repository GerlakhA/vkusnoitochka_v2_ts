import { FC, createContext, useContext, useState } from 'react'

type MyCustomContextType = {
	categoryId: number
	onClickCategory: (i: number) => void
	onClickSort: (obj: { name: string; sortProperty: string }) => void
	sortId: {
		name: string
		sortProperty: string
	}
}

interface IUseMyCustomContext {
	children: React.ReactNode
}

export const MyGlobalContext = createContext({} as MyCustomContextType)

export const useGlobalContext = () => useContext(MyGlobalContext)

export const UseMyGlobalContext: FC<IUseMyCustomContext> = ({ children }) => {
	const [categoryId, setCategoryId] = useState(0)
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

	return (
		<MyGlobalContext.Provider
			value={{
				categoryId,
				onClickCategory,
				onClickSort,
				sortId,
			}}
		>
			{children}
		</MyGlobalContext.Provider>
	)
}
