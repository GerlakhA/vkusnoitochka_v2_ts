const offers = [
	{
		id: 1,
		title: 'Наггетсы (4 шт) всего за 1 рубль',
		description: 'При покупке от 369 рублей',
		image:
			'https://ma-prod-cdn.mcdonalds.ru/mechanic/a0edde9fe0b844419e674c94a0753e6f/android/s/offer_image.png',
	},
	{
		id: 2,
		title: 'Два Биг Хита всего за 299 рублей',
		description: 'Ждем тебя!',
		image:
			'https://ma-prod-cdn.mcdonalds.ru/mechanic/deca0d77d03c494a8940cd25c75904dd/android/s/offer_image.png',
	},
]

const CardOffers = () => {
	return (
		<div className='w-[1200px] flex justify-start mb-[50px] gap-7 relative'>
			{offers.map(item => (
				<div
					key={item.id}
					className='w-[384px] h-[200px] rounded-xl mt-10 relative p-5 border-l-8 border-orange-500 shadow-xl'
				>
					<h1 className='font-extrabold'>{item.title}</h1>
					<p className='text-[12px]'>{item.description}</p>
					<img
						src={item.image}
						alt='offer'
						width={130}
						height={200}
						className='absolute right-0 top-[-10px] m-10'
					/>
					<div className='absolute left-[-8px] top-[50%] bg-bg_card w-[4px] h-[8px] rounded-r-full' />
				</div>
			))}
		</div>
	)
}

export default CardOffers
