import { FC } from 'react'
import CardProduct from '../components/CardProduct'
import CategoryMenu from './category/CategoryMenu'

interface IMenu {
	value: number
	onClickCategory: (i: number) => void
}

const Menu: FC<IMenu> = ({ value, onClickCategory }) => {
	return (
		<div className='ml-[120px] border-solid border-b w-[1300px] mt-10'>
			<h2 className='text-4xl font-black mb-10 ml-[5px]'>Наше меню</h2>
			<div>
				<CategoryMenu value={value} onClickCategory={onClickCategory} />
			</div>
			<CardProduct categoryId={value} />
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
