import { FC, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import CardProduct from '../components/CardProduct'
import CategoryMenu from './category/CategoryMenu'

interface IMenu {
	value: number
	onClickCategory: (i: number) => void
}

const Menu: FC<IMenu> = ({ value, onClickCategory }) => {
	const [title, setTitle] = useState('')

	return (
		<div className='ml-[120px] border-solid border-b w-[1300px] mt-10'>
			<div className='flex justify-between w-[700px] ml-2 relative'>
				<h2 className='text-4xl font-black mb-10 ml-[5px]'>Наше меню</h2>
				<div>
					<input
						value={title}
						onChange={e => setTitle(e.target.value)}
						type='search'
						placeholder='Поиск...'
						className='mt-2 w[200px] h-[35px] pl-[25px] border border-solid focus:outline-none rounded-md'
					/>
				</div>
				<div className='absolute top-[18px] left-[502px] opacity-40'>
					<AiOutlineSearch />
				</div>
			</div>
			<div>
				<CategoryMenu value={value} onClickCategory={onClickCategory} />
			</div>
			<CardProduct categoryId={value} searchTitle={title} />
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
