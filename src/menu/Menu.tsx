import CardProduct from '../components/CardProduct'
import CategoryMenu from './category/CategoryMenu'

const Menu = () => {
	return (
		<div className='ml-[120px] border-solid border-b w-[1200px]'>
			<h2 className='text-5xl font-extrabold mb-4 ml-[5px]'>Наше меню</h2>
			<div>
				<CategoryMenu />
			</div>
			<CardProduct />
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
