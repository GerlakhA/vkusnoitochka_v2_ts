import { Link } from 'react-router-dom'

const Category = () => {
	return (
		<div className='mr-40'>
			<Link className='m-5 hover:opacity-60 focus:font-extrabold' to={'/menu'}>
				Меню
			</Link>
			<Link className='m-5 hover:opacity-60' to={'/offers'}>
				Акции
			</Link>
			<Link className='m-5 hover:opacity-60' to={'/cafe'}>
				Кафе
			</Link>
			<Link className='m-5 hover:opacity-60' to={'/kids-combo'}>
				Кидз Комбо
			</Link>
			<Link className='m-5 hover:opacity-60' to={'/kachestvo'}>
				Качество
			</Link>
			<Link className='m-5 hover:opacity-60' to={'/novinki'}>
				Новинки
			</Link>
		</div>
	)
}

export default Category
