const aboutAs = [
	{ id: 1, title: 'Благотворительность' },
	{ id: 2, title: 'Работа у нас' },
	{ id: 3, title: 'О компании' },
	{ id: 4, title: 'Качество' },
	{ id: 5, title: 'Новости' },
	{ id: 6, title: 'Учебный центр' },
	{ id: 7, title: 'Программа лояльности' },
]

const contacts = [
	{ id: 1, title: 'Обратная связь' },
	{ id: 2, title: 'Для прессы' },
]

const Footer = () => {
	return (
		<>
			<div className='w-[1300px] flex justify-start items-start ml-32 border-solid border-b gap-10'>
				<div>
					<h3 className='flex justify-start items-start m-4 font-extrabold'>
						О нас
					</h3>
					{aboutAs?.length > 0 ? (
						aboutAs.map(item => (
							<p
								key={item.id}
								className='flex flex-col justify-start items-start text-[14px] m-4'
							>
								{item.title}
							</p>
						))
					) : (
						<p>Извините тут пусто :(</p>
					)}
				</div>
				<div>
					<h3 className='flex justify-start items-start m-4 font-extrabold'>
						Контакты
					</h3>
					{contacts?.length > 0 ? (
						contacts.map(item => (
							<p
								key={item.id}
								className='flex flex-col justify-start items-start text-[14px] m-4'
							>
								{item.title}
							</p>
						))
					) : (
						<p>Извините тут пусто :(</p>
					)}
				</div>
			</div>
			<div className='flex justify-start items-start ml-[120px] gap-8 p-4 text-[14px] opacity-60'>
				<p>Контакт-центр +7 (###) ### ## ##</p>
				<p>Правовая информация</p>
			</div>
		</>
	)
}

export default Footer
