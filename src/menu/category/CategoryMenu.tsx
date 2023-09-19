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
		<div className='ml-50 flex items-center w-full'>
			{categories &&
				categories.map((items, i) => (
					<div
						key={i}
						className='rounded-3xl hover:bg-gray-200 p-[15px] h-[44px] flex justify-center
						items-center focus:bg-gray-500 cursor-pointer'
						onClick={() => onClickCategory(i)}
					>
						{items}
					</div>
				))}
		</div>
	)
}

export default CategoryMenu
