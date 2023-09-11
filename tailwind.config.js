/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				logo: '#264F36',
				bg_button: '#f4f4f4',
				border_card: '#ffffff',
			},
		},
	},
	plugins: [],
}
