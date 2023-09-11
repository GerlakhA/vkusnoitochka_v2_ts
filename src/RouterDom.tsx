import { Route, Routes } from 'react-router-dom'
import App from './App'
import Menu from './menu/Menu'

const RouterDom = () => {
	return (
		<Routes>
			<Route element={<Menu />} path={'/menu'} />
			<Route element={<App />} path={'/'} />
			<Route element={<div>Page Not Found Sorry</div>} path={'*'} />
		</Routes>
	)
}

export default RouterDom
