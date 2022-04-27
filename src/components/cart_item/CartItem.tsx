import { CartContext, CartItemInterface } from '../../contexts/CartProvider'
import { IoClose } from 'react-icons/io5'
import { useContext } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export const CartItem = ({ brand, description, size, images, cartId, price, id }: CartItemInterface) => {
	const { cart, setCart } = useContext(CartContext)

	const removeItem = (cartId: string) => {
		const newCart = cart.filter(item => item.cartId !== cartId)
		setCart(newCart)
	}

	return (
		<Link
			to={`/${id}`}
			className={clsx(
				'rounded-xl flex relative bg-zinc-900 overflow-hidden shadow-lg',
				cart.length === 1 && 'lg:w-1/2'
			)}>
			<div className='hidden w-50 sm:w-36 sm:block'>
				<img src={images[0]} alt={description} />
			</div>
			<div className='ml-2 p-3 flex flex-col justify-center gap-2'>
				<p>{brand}</p>
				<p>{description}</p>
				<p>Size: {size}</p>
				<p>{price} €</p>
			</div>
			<button
				className='text-secondary transition-colors duration-500 absolute right-2 top-2 text-4xl'
				onClick={() => removeItem(cartId)}>
				<IoClose />
			</button>
		</Link>
	)
}
