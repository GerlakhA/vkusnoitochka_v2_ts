import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import CardProduct from '../components/CardProduct'
import { Sort } from '../components/Sort'
import CategoryMenu from './category/CategoryMenu'

const Menu = () => {
	const [title, setTitle] = useState('')

	return (
		<div className='ml-[120px] border-solid border-b w-[1300px] mt-10'>
			<div className='flex justify-between w-[1200px] ml-2 relative'>
				<h2 className='text-4xl font-black mb-10 ml-[5px]'>Наше меню</h2>
				<div>
					<input
						value={title}
						onChange={e => setTitle(e.target.value)}
						type='search'
						placeholder='Поиск...'
						className='mt-2 w-[300px] h-[35px] pl-[25px] border border-solid focus:outline-none rounded-md'
					/>
				</div>
				<div className='w-[250px]'>
					<Sort />
				</div>
				<div className='absolute top-[18px] left-[444px] opacity-40'>
					<AiOutlineSearch />
				</div>
			</div>
			<div>
				<CategoryMenu />
			</div>
			<CardProduct searchTitle={title} />
			<p className='text-[13px] p-4 opacity-60'>
				Цены и ассортименты продуктов на сайте указаны для выбранного вами
				региона и могут отличаться в конкретном предприятии. Наличие продуктов и
				цену уточняйте в выбранном предприятии. Компания не несет
				ответственности за деятельность третьих лиц, предлагающих услуги по
				доставке продукции на сторонних сайтах.
			</p>
		</div>
	)
}

export default Menu
