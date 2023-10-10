import { Link } from 'react-router-dom'

const Category = () => {
	return (
		<div className='flex justify-center items-center mr-[90px] ml-20'>
			<Link className='m-5 hover:opacity-60 focus:font-extrabold' to={'/menu'}>
				Меню
			</Link>
			<Link className='m-5 hover:opacity-60' to={'/offers'}>
				Акции
			</Link>
			<Link className='m-5 hover:opacity-60' to={'/cafe'}>
				Кафе
			</Link>
		</div>
	)
}

export default Category
