import { createContext, useState } from 'react'
import { productInterface, PRODUCTS } from '../constants/products'

interface ProductsProviderProps {
	children: React.ReactNode
}

interface ProductsContextDefaultValue {
	products: productInterface[]
	setProducts: React.Dispatch<React.SetStateAction<productInterface[]>>
}

export const ProductsContext = createContext<ProductsContextDefaultValue>({ products: [], setProducts: () => {} })

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [products, setProducts] = useState<productInterface[]>(PRODUCTS)
	return <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>
}
