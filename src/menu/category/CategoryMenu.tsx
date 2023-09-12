import { FC } from 'react'

// const options = [
// 	{ id: 1, value: 'Кидз Комбо', label: 'Кидз Комбо' },
// 	{ id: 2, value: 'Десерты', label: 'Десерты' },
// 	{ id: 3, value: 'Соусы и другое', label: 'Соусы и другое' },
// ]

interface ICategoryMenu {
	onClickCategory: (i: number) => void
	value: number
}

const CategoryMenu: FC<ICategoryMenu> = ({ value, onClickCategory }) => {
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

	const selectOptions = ['Кидз Комбо', 'Десерты', 'Соусы и другое']

	return (
		<div className='ml-50 flex items-center w-full '>
			{categories &&
				categories.map((items, i) => (
					<div
						key={i}
						className='rounded-3xl hover:bg-gray-200 p-[15px] h-[44px] flex justify-center
						items-center focus:bg-gray-200 cursor-pointer '
						onClick={() => onClickCategory(i)}
					>
						{items}
					</div>
				))}
			{/* <Select options={options} className='w-40 ml-20' placeholder='Еще' /> */}
			<select placeholder='Еще' className='w-40 ml-20'>
				{selectOptions &&
					selectOptions.map((item, i) => (
						<option key={i} value={value} onClick={() => onClickCategory(i)}>
							{item}
						</option>
					))}
			</select>
		</div>
	)
}

export default CategoryMenu
