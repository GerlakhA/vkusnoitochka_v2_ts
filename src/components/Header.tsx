import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'

const Header = () => {
	const [top, setTop] = useState(true)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const scrollHandler = () => {
			window.scrollY > 10 ? setTop(false) : setTop(true)
		}
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [top])

	return (
		<div className={`sticky top-0 z-20 ${!top && `bg-white shadow-lg`}`}>
			<header
				className={`flex justify-start items-center w-full h-full p-2 sticky top-0 z-20 ${
					!top && `bg-white shadow-lg`
				}`}
			>
				<div className='flex p-2 ml-[100px]'>
					<img
						src={
							'data:image/png;base64,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'
						}
						alt='logo'
						width={60}
						height={35}
					/>
					<Link to={'/'}>
						<h1 className='text-3xl text-logo font-extrabold'>
							Вкусно - и точка
						</h1>
					</Link>
				</div>
				<Category />
				{/* Same as */}
				<Link to={'/cart'}>
					<div className='bg-bg_button rounded-[50px] w-[90px] h-[51px] flex justify-center items-center ml-[44px]'>
						<button onClick={() => setOpen(!open)}>Корзина</button>
					</div>
				</Link>
			</header>
			{/* {open && (
				<div className='w-[1470px] bg-black opacity-30 z-10'>
					<Cart />
				</div>
			)} */}
		</div>
	)
}

export default Header
