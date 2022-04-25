module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0d0d0d',
				secondary: 'var(--clr)',
				navDark: '#1A1D1F',
				navLight: '#272B30',
				navTextLight: '#F4F4F4',
				navTextDark: '#7A7F83',
				navBlue: '#A1F0D8',
				navOrange: '#F9C39C',
			},
		},
		screens: {
			xxs: '400px',

			xs: '500px',

			sm: '640px',

			md: '768px',

			lg: '1024px',

			xl: '1280px',

			'2xl': '1536px',
		},
	},
	plugins: [],
}
