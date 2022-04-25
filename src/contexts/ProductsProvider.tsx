import { createContext, useState } from 'react'
import { ProductInterface, PRODUCTS } from '../constants/products'

interface ProductsProviderProps {
	children: React.ReactNode
}

interface ProductsContextDefaultValue {
	products: ProductInterface[]
	setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
	tempProducts: ProductInterface[]
	setTempProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}

export const ProductsContext = createContext<ProductsContextDefaultValue>({
	products: PRODUCTS,
	setProducts: () => {},
	tempProducts: [],
	setTempProducts: () => {},
})

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [products, setProducts] = useState<ProductInterface[]>(PRODUCTS)
	const [tempProducts, setTempProducts] = useState<ProductInterface[]>([])

	return (
		<ProductsContext.Provider value={{ products, setProducts, tempProducts, setTempProducts }}>
			{children}
		</ProductsContext.Provider>
	)
}
