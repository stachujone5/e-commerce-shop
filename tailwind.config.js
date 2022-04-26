module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1c1f20',
				primaryDark: '#1A1D1F',
				secondary: 'var(--clr)',
				light: '#272B30',
				textLight: '#F4F4F4',
				textDark: '#7A7F83',
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
