import { Route, Routes } from 'react-router-dom'
import Orders from './components/Orders'
import { UseMyGlobalContext } from './hooks/MyContext'
import Menu from './menu/Menu'
import Home from './pages/Home'
import Offers from './pages/Offers'

const RouterDom = () => {
	return (
		<UseMyGlobalContext>
			<Routes>
				<Route element={<Menu />} path={'/menu'} />
				<Route element={<Home />} path={'/'} />
				<Route element={<Offers />} path={'/offers'} />
				<Route element={<Orders />} path={'/orders'} />
				<Route element={<div>Page Not Found Sorry</div>} path={'*'} />
			</Routes>
		</UseMyGlobalContext>
	)
}

export default RouterDom
