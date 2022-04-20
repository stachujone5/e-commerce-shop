import { createContext, useState } from 'react'
import { ProductInterface, PRODUCTS } from '../constants/products'

interface ProductsProviderProps {
	children: React.ReactNode
}

interface ProductsContextDefaultValue {
	products: ProductInterface[]
	setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}

export const ProductsContext = createContext<ProductsContextDefaultValue>({ products: [], setProducts: () => {} })

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [products, setProducts] = useState<ProductInterface[]>(PRODUCTS)
	return <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>
}
