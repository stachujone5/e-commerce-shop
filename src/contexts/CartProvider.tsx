import { createContext, useState } from 'react'

interface CartItem {
	price: number
	size: number
	brand: string
	description: string
	id: number
}

interface CartContextDefaultValue {
	cart: CartItem[]
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

interface CartProviderProps {
	children: React.ReactNode
}

export const CartContext = createContext<CartContextDefaultValue>({ cart: [], setCart: () => {} })

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cart, setCart] = useState<CartItem[]>([])
	return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}
