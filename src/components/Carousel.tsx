import Carousel from 'react-material-ui-carousel'

export default function myCarousel() {
	const slides = [
		{
			id: 1,
			image:
				'https://vkusnoitochka.ru/upload/iblock/a8a/rwuo6we9mwlexxtyva3pyr98uix6101l/SITEn_CP_CH_Mushrooms_1200x400_min.jpg',
		},
		{
			id: 2,
			image:
				'https://vkusnoitochka.ru/upload/iblock/b7a/g5tsdf41wn6dbcq8mbhjz9pvz5lo4psm/SITEn_BigChickenBurger_1200x400_min.jpg',
		},
		{
			id: 3,
			image:
				'https://vkusnoitochka.ru/upload/iblock/295/c0fyxhvmkdctfprzkiectocrx9rflqug/SITEn_BigReHit_pair_1200x400_min.jpg',
		},
		{
			id: 4,
			image:
				'https://vkusnoitochka.ru/upload/iblock/197/pqpk2xvxjzpid093q07l3bzpntxz30yl/SITEn_BigReHit_1200x400_min.jpg',
		},
		{
			id: 5,
			image:
				'https://vkusnoitochka.ru/upload/iblock/cda/h4l67g33lac0gfrfskp02k6w7z73glrh/SITEn_Bonus072023_1200x400_min.jpg',
		},
		{
			id: 6,
			image:
				'https://vkusnoitochka.ru/upload/iblock/036/wofz0tdwf5e3ii11s0vkzzshxvekxuaq/SITEn_4Nuggets_1P_082023_1200x400_min.jpg',
		},
	]

	return (
		<Carousel
			autoPlay
			interval={2500}
			className='w-[1200px] h-[400px] rounded-2xl'
		>
			{slides.map(item => (
				<img key={item.id} src={item.image} alt='image' />
			))}
		</Carousel>
	)
}
