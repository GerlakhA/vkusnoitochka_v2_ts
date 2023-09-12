/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				logo: '#264F36',
				bg_button: '#f4f4f4',
				bg_card: '#ffffff',
				overlay: '#717C90',
				bg_app: '#fdfdfd',
			},
		},
	},
	plugins: [],
}
