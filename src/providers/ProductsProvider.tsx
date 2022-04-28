import { useState } from 'react'
import { DEFAULT_CATEGORY, DEFAULT_CHECKED_BRANDS, DEFAULT_PRODUCTS, DEFAULT_SORTING } from '../constants/defaults'
import { sort } from '../helpers/sort'
import { CategoryType, Children, CriteriaType, ProductInterface } from '../types/types'
import { ProductsContext } from '../contexts/ProductsContext'

export const ProductsProvider = ({ children }: Children) => {
	const [products, setProducts] = useState<ProductInterface[]>(sort(DEFAULT_SORTING, DEFAULT_PRODUCTS))
	const [category, setCategory] = useState<CategoryType>(DEFAULT_CATEGORY)
	const [checkedBrands, setCheckedBrands] = useState(DEFAULT_CHECKED_BRANDS)
	const [sorting, setSorting] = useState<CriteriaType>(DEFAULT_SORTING)

	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
				category,
				setCategory,
				checkedBrands,
				setCheckedBrands,
				sorting,
				setSorting,
			}}>
			{children}
		</ProductsContext.Provider>
	)
}
