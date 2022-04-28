import { createContext, useState } from 'react'
import { returnDefaultProducts } from '../constants/constants'
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
}

export const ProductsContext = createContext<ProductsContextDefaultValue>({
	products: returnDefaultProducts(),
	setProducts: () => {},
	tempProducts: [],
	setTempProducts: () => {},
})

export const ProductsProvider = ({ children }: Props) => {
	const [products, setProducts] = useState<ProductInterface[]>(sort('Price Descending', returnDefaultProducts()))
	const [tempProducts, setTempProducts] = useState<ProductInterface[]>([])

	return (
		<ProductsContext.Provider value={{ products, setProducts, tempProducts, setTempProducts }}>
			{children}
		</ProductsContext.Provider>
	)
}
