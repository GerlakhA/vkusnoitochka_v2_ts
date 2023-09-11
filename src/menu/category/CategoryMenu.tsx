import Select from 'react-select'

const options = [
	{ id: 1, value: 'Кидз Комбо', label: 'Кидз Комбо' },
	{ id: 2, value: 'Десерты', label: 'Десерты' },
	{ id: 3, value: 'Соусы и другое', label: 'Соусы и другое' },
]

const CategoryMenu = () => {
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
	return (
		<div className='ml-50 flex items-center w-full '>
			{categories &&
				categories.map((items, i) => (
					<div
						key={i}
						className='rounded-3xl hover:bg-gray-200 p-[15px] h-[44px] flex justify-center
						items-center focus:bg-gray-200 cursor-pointer'
					>
						{items}
					</div>
				))}
			<Select options={options} className='w-40 ml-20' placeholder='Еще' />
		</div>
	)
}

export default CategoryMenu
