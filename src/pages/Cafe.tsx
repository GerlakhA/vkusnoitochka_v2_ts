import { Link } from 'react-router-dom'

const Cafe = () => {
	return (
		<div className='w-full h-full relative'>
			<img
				src='https://vkusnoitochka.ru/pages/events/mc-cafe/coffee-bg.jpg'
				alt='cafe'
				className='w-full h-[852px]'
			/>
			<div className='absolute left-[140px] top-[10%] w-full'>
				<span className='text-white text-[160px] font-extrabold'>Кофе</span>
				<h3 className='text-white text-[60px] font-extrabold'>
					Готовим, как вы <br />
					любите
				</h3>
				<Link to={'/menu'}>
					<span
						className='flex justify-center items-center w-[268px] h-[64px] bg-orange-400 
          rounded-[42px] text-white font-bold text-[24px] mt-10'
					>
						Перейти в меню
					</span>
				</Link>
			</div>
		</div>
	)
}

export default Cafe
