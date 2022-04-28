import { useState } from 'react'
import { CartItemInterface, Children } from '../types/types'
import { CartContext } from '../contexts/CartContext'

export const CartProvider = ({ children }: Children) => {
	const [cart, setCart] = useState<CartItemInterface[]>([])
	return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}
