import { CartContext, CartItemInterface } from '../../contexts/CartProvider'
import { IoClose } from 'react-icons/io5'
import { useContext } from 'react'

interface CartItemProps {
	cartItem: CartItemInterface
}

export const CartItem = ({ cartItem }: CartItemProps) => {
	const { brand, description, price, size, images, id } = cartItem
	const { cart, setCart } = useContext(CartContext)

	const removeItem = (id: string) => {
		const newCart = cart.filter(item => item.id !== id)
		setCart(newCart)
	}

	return (
		<div className='border border-secondary rounded flex relative'>
			<div className='hidden w-36 sm:block'>
				<img src={images[0]} alt={description} />
			</div>
			<div className='ml-2 p-3 flex flex-col justify-center gap-2'>
				<p>{brand}</p>
				<p>{description}</p>
				<p>Size: {size}</p>
				<p>{price} €</p>
			</div>
			<button className='text-red-600 absolute right-2 top-2 text-4xl' onClick={() => removeItem(id)}>
				<IoClose />
			</button>
		</div>
	)
}
