import '../App.scss'
import CardOffers from '../components/CardOffers'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Menu from '../menu/Menu'

const Home = () => {
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
			<Menu />
			<Footer />
		</main>
	)
}

export default Home
