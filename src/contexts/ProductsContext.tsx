import { createContext } from 'react'
import { DEFAULT_CATEGORY, DEFAULT_CHECKED_BRANDS, DEFAULT_PRODUCTS, DEFAULT_SORTING } from '../constants/defaults'
import { sort } from '../helpers/sort'
import { CategoryType, CriteriaType, DefaultCheckedBrandsInterface, ProductInterface } from '../types/types'

interface ProductsContextDefaultValue {
	products: ProductInterface[]
	setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
	category: CategoryType
	setCategory: React.Dispatch<React.SetStateAction<CategoryType>>
	checkedBrands: DefaultCheckedBrandsInterface
	setCheckedBrands: React.Dispatch<React.SetStateAction<DefaultCheckedBrandsInterface>>
	sorting: CriteriaType
	setSorting: React.Dispatch<React.SetStateAction<CriteriaType>>
}

export const ProductsContext = createContext<ProductsContextDefaultValue>({
	products: sort(DEFAULT_SORTING, DEFAULT_PRODUCTS),
	setProducts: () => {},
	category: DEFAULT_CATEGORY,
	setCategory: () => {},
	checkedBrands: DEFAULT_CHECKED_BRANDS,
	setCheckedBrands: () => {},
	sorting: DEFAULT_SORTING,
	setSorting: () => {},
})
