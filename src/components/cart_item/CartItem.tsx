import { CartItemInterface } from '../../contexts/CartProvider'

interface CartItemProps {
	cartItem: CartItemInterface
}

export const CartItem = ({ cartItem }: CartItemProps) => {
	const { brand, description, price, size } = cartItem

	return (
		<div className='border'>
			<p>{brand}</p>
			<p>{description}</p>
			<p>{size}</p>
			<p>{price} Euro</p>
		</div>
	)
}
