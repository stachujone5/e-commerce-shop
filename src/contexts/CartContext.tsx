import { createContext } from 'react'
import { CartItemInterface } from '../types/types'

interface CartContextDefaultValue {
	cart: CartItemInterface[]
	setCart: React.Dispatch<React.SetStateAction<CartItemInterface[]>>
}

export const CartContext = createContext<CartContextDefaultValue>({ cart: [], setCart: () => {} })
