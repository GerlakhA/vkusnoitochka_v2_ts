export const FormatCurrency = (price: number) =>
	new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'rub',
		currencyDisplay: 'code',
	}).format(price)
