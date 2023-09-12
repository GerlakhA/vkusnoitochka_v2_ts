import { FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './menu/Menu'
import Home from './pages/Home'

interface IRouterDom {
	// onClickCategory: (i: number) => void
	// value: number
}

const RouterDom: FC<IRouterDom> = () => {
	const [categoryId, setCategoryId] = useState(0)

	return (
		<Routes>
			<Route
				element={
					<Menu
						value={categoryId}
						onClickCategory={(i: number) => setCategoryId(i)}
					/>
				}
				path={'/menu'}
			/>
			<Route
				element={
					<Home
						value={categoryId}
						onClickCategory={(i: number) => setCategoryId(i)}
					/>
				}
				path={'/'}
			/>
			<Route element={<div>Page Not Found Sorry</div>} path={'*'} />
		</Routes>
	)
}

export default RouterDom
