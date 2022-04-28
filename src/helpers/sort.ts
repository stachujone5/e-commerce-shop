import { ProductInterface } from './../types/types'
import { CriteriaType } from '../types/types'

export const sort = (criteria: CriteriaType, tempProducts: ProductInterface[]) => {
	if (criteria === 'Price Ascending') {
		return tempProducts.sort((a, b) => a.price - b.price)
	}
	if (criteria === 'Price Descending') {
		return tempProducts.sort((a, b) => b.price - a.price)
	}
	if (criteria === 'Alphabetically (a-z)') {
		return tempProducts.sort((a, b) => {
			if (a.description < b.description) {
				return -1
			}
			if (a.description > b.description) {
				return 1
			}
			return 0
		})
	}
	if (criteria === 'Alphabetically (z-a)') {
		return tempProducts.sort((a, b) => {
			if (a.description > b.description) {
				return -1
			}
			if (a.description < b.description) {
				return 1
			}
			return 0
		})
	}
	return tempProducts
}
