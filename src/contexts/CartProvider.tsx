import { createContext, useState } from 'react'

export interface CartItemInterface {
	price: number
	size: number
	brand: string
	description: string
	id: number
	cartId: string
	images: string[]
}

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
