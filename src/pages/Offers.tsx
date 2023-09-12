import CardOffers from '../components/CardOffers'
import Footer from '../components/Footer'

const Offers = () => {
	return (
		<>
			<div className='p-2 ml-[125px] mt-10 w-[1200px] border-b border-solid'>
				<h3 className='text-4xl font-black'>Наши акции</h3>
				<CardOffers />
				<p className='text-[13px] p-4 opacity-60'>
					Цены и ассортименты продуктов на сайте указаны для выбранного вами
					региона и могут отличаться в конкретном предприятии. Наличие продуктов
					и цену уточняйте в выбранном предприятии.
				</p>
			</div>
			<Footer />
		</>
	)
}

export default Offers
