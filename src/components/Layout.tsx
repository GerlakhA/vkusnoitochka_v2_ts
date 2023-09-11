import { FC } from 'react'
import Header from './Header'

interface Ilayout {
	children: React.ReactNode
}

const Layout: FC<Ilayout> = ({ children }) => {
	return (
		<div className='h-screen w-full'>
			<Header />
			{children}
		</div>
	)
}

export default Layout
