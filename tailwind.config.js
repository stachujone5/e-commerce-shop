module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0d0d0d',
				secondary: 'var(--clr)',
			},
		},
		screens: {
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
