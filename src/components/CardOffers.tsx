const CardOffers = () => {
	return (
		<div className='w-[1200px] flex justify-start mb-[50px] gap-7'>
			<div className='w-[384px] h-[200px] rounded-xl mt-10 relative p-5 border-l-8 border-orange-500 shadow-xl'>
				<h1 className='font-extrabold'>Наггетсы (4 шт) всего за 1 рубль</h1>
				<p className='text-[12px]'>При покупке от 369 рублей</p>
				<img
					src={
						'https://ma-prod-cdn.mcdonalds.ru/mechanic/a0edde9fe0b844419e674c94a0753e6f/android/s/offer_image.png'
					}
					alt='offer'
					width={130}
					height={200}
					className='absolute right-0 top-[-10px] m-10'
				/>
			</div>

			<div className='w-[384px] h-[200px] rounded-xl mt-10 relative p-5 border-l-8 border-orange-500 shadow-xl'>
				<h1 className='font-extrabold'>Два Биг Хита всего за 299 рублей</h1>
				<p className='text-[12px]'>Ждем тебя!</p>
				<img
					src={
						'https://ma-prod-cdn.mcdonalds.ru/mechanic/deca0d77d03c494a8940cd25c75904dd/android/s/offer_image.png'
					}
					alt='offer'
					width={130}
					height={200}
					className='absolute right-0 top-[-10px] m-10'
				/>
			</div>
		</div>
	)
}

export default CardOffers
