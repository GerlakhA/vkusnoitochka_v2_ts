import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Menu from './menu/Menu'
import Cafe from './pages/Cafe'
import Home from './pages/Home'
import Offers from './pages/Offers'

const RouterDom = () => {
	return (
		<Routes>
			<Route element={<Menu />} path={'/menu'} />
			<Route element={<Home />} path={'/'} />
			<Route element={<Offers />} path={'/offers'} />
			<Route element={<Cafe />} path={'/cafe'} />
			<Route element={<Cart />} path={'/cart'} />
			<Route element={<div>Page Not Found Sorry</div>} path={'*'} />
		</Routes>
	)
}

export default RouterDom
