import { FC } from 'react'
import { useGlobalContext } from '../../hooks/MyContext'

interface ICategoryMenu {
	// onClickCategory: (i: number) => void
	// value: number
}

const CategoryMenu: FC<ICategoryMenu> = () => {
	const categories = [
		'Новинки',
		'Популярное',
		'Напитки',
		'Комбо обед',
		'Бургеры и Роллы',
		'Картофель, стартеры и салаты',
		'Кафе',
		'Завтрак',
	]

	const { onClickCategory } = useGlobalContext()

	return (
		<div className='ml-50 flex items-center justify-start w-full'>
			{categories &&
				categories.map((items, i) => (
					<div
						key={i}
						className='hover:opacity-60 focus:font-black p-[15px] h-[44px] flex justify-center
						items-center cursor-pointer'
						onClick={() => onClickCategory(i)}
					>
						{items}
					</div>
				))}
		</div>
	)
}

export default CategoryMenu
