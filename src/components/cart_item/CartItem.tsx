import { CartItemInterface } from '../../contexts/CartProvider'

interface CartItemProps {
	cartItem: CartItemInterface
}

export const CartItem = ({ cartItem }: CartItemProps) => {
	const { brand, description, price, size, images } = cartItem

	return (
		<div className='border rounded my-5 p-3'>
			<div className=' bg-red-500 w-36 sm:w-48'>
				<img src={images[0]} alt={description} />
			</div>
			<div className='ml-8'>
				<p>{brand}</p>
				<p>{description}</p>
				<p>{size}</p>
				<p>{price} €</p>
			</div>
		</div>
	)
}
