import { FC, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

const images = [
	{
		id: 1,
		image: 'https://vkusnoitochka.ru/pages/events/mc-cafe/coffee-bg.jpg',
	},
	{
		id: 2,
		image: 'https://vkusnoitochka.ru/pages/events/mc-cafe/deserts-bg.jpg',
	},
	{
		id: 3,
		image: 'https://vkusnoitochka.ru/pages/events/mc-cafe/bakery-bg.jpg',
	},
]

interface ICafe {
	autoSlide?: boolean
	autoSlideInterval?: number
}

const Cafe: FC<ICafe> = ({ autoSlide = false, autoSlideInterval = 2500 }) => {
	const [curr, setCurr] = useState(0)

	const prev = () =>
		setCurr(curr => (curr === 0 ? images.length - 1 : curr - 1))
	const next = () =>
		setCurr(curr => (curr === images.length - 1 ? 0 : curr + 1))

	useEffect(() => {
		if (!autoSlide) return
		const slideInterval = setInterval(next, autoSlideInterval)
		return () => clearInterval(slideInterval)
	}, [])
	return (
		// <div className='w-full h-full relative overflow-hidden'>
		// 	{images.map(item => (
		// 		<img key={item.id} src={item.image} alt='mak cafe' />
		// 	))}
		// 	<div className='absolute left-[140px] top-[10%] w-full h-full'>
		// 		<span className='text-white text-[160px] font-extrabold'>Кофе</span>
		// 		<h3 className='text-white text-[60px] font-extrabold'>
		// 			Готовим, как вы <br />
		// 			любите
		// 		</h3>
		// 		<Link to={'/menu'}>
		// 			<span
		// 				className='flex justify-center items-center w-[268px] h-[64px] bg-orange-400
		//       rounded-[42px] text-white font-bold text-[24px] mt-10'
		// 			>
		// 				Перейти в меню
		// 			</span>
		// 		</Link>
		// 	</div>
		// </div>
		<div className='overflow-hidden relative w-full h-full rounded-xl '>
			<div
				className='flex transition-transform ease-out duration-500 w-full'
				style={{ transform: `translateX(-${curr * 100}%)` }}
			>
				{images.map(img => (
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
					{images.map((_, i) => (
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

export default Cafe
