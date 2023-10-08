import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export default function Carousel({
	autoSlide = false,
	autoSlideInterval = 2500,
}: {
	autoSlide?: boolean
	autoSlideInterval?: number
}) {
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

	const [curr, setCurr] = useState(0)

	const prev = () =>
		setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1))
	const next = () =>
		setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1))

	useEffect(() => {
		if (!autoSlide) return
		const slideInterval = setInterval(next, autoSlideInterval)
		return () => clearInterval(slideInterval)
	}, [])

	return (
		<div className='overflow-hidden relative w-[1200px] h-[400px] rounded-xl '>
			<div
				className='flex transition-transform ease-out duration-500 w-[1200px]'
				style={{ transform: `translateX(-${curr * 100}%)` }}
			>
				{slides.map(img => (
					<img key={img.id} src={img.image} alt='images' />
				))}
			</div>
			<div className='absolute left-0 top-[45%] flex items-center justify-between p-4'>
				<button
					onClick={prev}
					className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
				>
					<ChevronLeft size={40} />
				</button>
			</div>
			<div className='absolute right-0 top-[45%] flex items-center justify-between p-4'>
				<button
					onClick={next}
					className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
				>
					<ChevronRight size={40} />
				</button>
			</div>

			<div className='absolute bottom-4 right-0 left-0'>
				<div className='flex items-center justify-center gap-2'>
					{slides.map((_, i) => (
						<div
							key={i}
							className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
