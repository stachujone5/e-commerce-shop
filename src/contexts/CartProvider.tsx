import { createContext, useState } from 'react'
import { CartItemInterface } from '../types/types'

interface CartContextDefaultValue {
	cart: CartItemInterface[]
	setCart: React.Dispatch<React.SetStateAction<CartItemInterface[]>>
}

interface Props {
	children: React.ReactNode
}

export const CartContext = createContext<CartContextDefaultValue>({ cart: [], setCart: () => {} })

export const CartProvider = ({ children }: Props) => {
	const [cart, setCart] = useState<CartItemInterface[]>([])
	return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}
