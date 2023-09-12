import { FC } from 'react'
import '../App.css'
import CardOffers from '../components/CardOffers'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Menu from '../menu/Menu'

interface IHome {
	value: number
	onClickCategory: (i: number) => void
}

const Home: FC<IHome> = ({ value, onClickCategory }) => {
	return (
		<main className='w-full'>
			<div className='flex justify-center items-center mt-4 text-2xl text-black mb-20'>
				<Carousel />
			</div>
			<div className='p-2 ml-[125px] mt-10'>
				<h3 className='text-4xl font-black'>Наши акции</h3>
				<CardOffers />
			</div>
			<Menu value={value} onClickCategory={onClickCategory} />
			<Footer />
		</main>
	)
}

export default Home
