import { BrandType, CategoryType, CriteriaType, SizesType } from './../types/types'
import { PRODUCTS } from './products'

export const SIZES: SizesType[] = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]

export const DEFAULT_CHECKED_BRANDS = { Nike: false, Adidas: false, 'New Balance': false, Vans: false }

export const BRANDS: BrandType[] = ['Nike', 'Adidas', 'New Balance', 'Vans']

export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const CATEGORIES: CategoryType[] = ['man', 'woman', 'kids', 'all']

export const CRITERIAS: CriteriaType[] = [
	'Price Ascending',
	'Price Descending',
	'Alphabetically (a-z)',
	'Alphabetically (z-a)',
]

export const DEFAULT_CATEGORY: CategoryType = 'man'

export const DEFAULT_COLOR = '#ff9800'

export const returnDefaultProducts = () => {
	return PRODUCTS.filter(product => product.category === DEFAULT_CATEGORY)
}

export const FADE = {
	visible: {
		opacity: 1,
		transition: { duration: 0.5 },
	},

	hidden: {
		opacity: 0,
	},
}

export const SETTINGS = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
			},
		},
	],
}
