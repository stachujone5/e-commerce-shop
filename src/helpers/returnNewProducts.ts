import { PRODUCTS } from '../constants/products'
import { CategoryType, CriteriaType, DefaultCheckedBrandsInterface, ProductInterface } from './../types/types'
import { sort } from './sort'

export const returnNewProducts = (
	category: CategoryType,
	sorting: CriteriaType,
	checkedBrands: DefaultCheckedBrandsInterface
) => {
	let newProducts: ProductInterface[]
	let categorizedProducts: ProductInterface[]
	if (category === 'all') {
		categorizedProducts = PRODUCTS
	} else {
		categorizedProducts = PRODUCTS.filter(product => product.category === category)
	}

	const brandedProducts = categorizedProducts.filter(product => checkedBrands[product.shortBrand])

	if (brandedProducts.length) {
		newProducts = brandedProducts
	} else {
		newProducts = categorizedProducts
	}

	newProducts = [...sort(sorting, newProducts)]
	return newProducts
}
