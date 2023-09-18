import { FC } from 'react'
import '../App.scss'
import CardOffers from '../components/CardOffers'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Menu from '../menu/Menu'

interface IHome {
	value: number
	sortValue: {
		name: 'по цене'
		sortProperty: 'price'
	}
	onClickCategory: (i: number) => void
	onClickSort: (i: number) => void
}

const Home: FC<IHome> = ({
	value,
	sortValue,
	onClickCategory,
	onClickSort,
}) => {
	return (
		<main className='w-full bg-bg_app'>
			<div className='flex justify-center items-center mt-4 text-2xl text-black mb-20'>
				<div className='max-w-[1200px] h-[400px]'>
					<Carousel autoSlide />
				</div>
			</div>
			<div className='p-2 ml-[125px] mt-10'>
				<h3 className='text-4xl font-black'>Наши акции</h3>
				<CardOffers />
			</div>
			<Menu
				value={value}
				sortValue={sortValue}
				onClickCategory={onClickCategory}
				onClickSort={onClickSort}
			/>
			<Footer />
		</main>
	)
}

export default Home
