import { PRODUCTS } from './products'
import { CategoryType, CriteriaType, DefaultCheckedBrandsInterface } from './../types/types'

export const DEFAULT_CATEGORY: CategoryType = 'man'

export const DEFAULT_COLOR = '#ff9800'

export const DEFAULT_PRODUCTS = PRODUCTS.filter(product => product.category === DEFAULT_CATEGORY)

export const DEFAULT_SORTING: CriteriaType = 'Price Descending'

export const DEFAULT_CHECKED_BRANDS: DefaultCheckedBrandsInterface = {
	Nike: false,
	Adidas: false,
	'New Balance': false,
	Vans: false,
}
