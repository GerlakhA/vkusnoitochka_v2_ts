import { FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Menu from './menu/Menu'
import Cafe from './pages/Cafe'
import Home from './pages/Home'
import Offers from './pages/Offers'

interface IRouterDom {
	// onClickCategory: (i: number) => void
	// value: number
}

const RouterDom: FC<IRouterDom> = () => {
	const [categoryId, setCategoryId] = useState(0)
	const [sortId, setSortId] = useState({
		name: 'по цене',
		sortProperty: 'price',
	})

	return (
		<Routes>
			<Route
				element={
					<Menu
						value={categoryId}
						sortValue={sortId}
						onClickCategory={(i: number) => setCategoryId(i)}
						onClickSort={(i: number) => setSortId(i)}
					/>
				}
				path={'/menu'}
			/>
			<Route
				element={
					<Home
						value={categoryId}
						sortValue={sortId}
						onClickCategory={(i: number) => setCategoryId(i)}
						onClickSort={(i: number) => setSortId(i)}
					/>
				}
				path={'/'}
			/>
			<Route element={<Offers />} path={'/offers'} />
			<Route element={<Cafe />} path={'/cafe'} />
			<Route element={<Cart />} path={'/cart'} />
			<Route element={<div>Page Not Found Sorry</div>} path={'*'} />
		</Routes>
	)
}

export default RouterDom
