import { createContext, useState } from 'react'
import { PRODUCTS_PER_PAGE } from '../constants/constants'
import { PRODUCTS } from '../constants/products'
import { sort } from '../helpers/sort'
import { ProductInterface } from '../types/types'

interface Props {
	children: React.ReactNode
}

interface ProductsContextDefaultValue {
	products: ProductInterface[]
	setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
	tempProducts: ProductInterface[]
	setTempProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
	page: number
	setPage: React.Dispatch<React.SetStateAction<number>>
}

export const ProductsContext = createContext<ProductsContextDefaultValue>({
	products: PRODUCTS.slice(0, PRODUCTS_PER_PAGE),
	setProducts: () => {},
	tempProducts: [],
	setTempProducts: () => {},
	page: 0,
	setPage: () => {},
})

export const ProductsProvider = ({ children }: Props) => {
	const [products, setProducts] = useState<ProductInterface[]>(
		sort('Price Descending', PRODUCTS.slice(0, PRODUCTS_PER_PAGE))
	)
	const [tempProducts, setTempProducts] = useState<ProductInterface[]>([])
	const [page, setPage] = useState(1)

	return (
		<ProductsContext.Provider value={{ products, setProducts, tempProducts, setTempProducts, page, setPage }}>
			{children}
		</ProductsContext.Provider>
	)
}
