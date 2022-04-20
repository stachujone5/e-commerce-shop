import { useContext } from 'react'
import { CartItem } from '../../components/cart_item/CartItem'
import { Container } from '../../components/container/Container'
import { CartContext } from '../../contexts/CartProvider'

export const Cart = () => {
	const { cart } = useContext(CartContext)

	return (
		<Container>
			<div className='min-h-screen my-24'>
				<h2 className='text-4xl text-center my-8'>Your Cart</h2>
				<div>
					{cart.map(item => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</div>
				<button className='p-2 bg-purple-700 rounded-lg'>Checkout</button>
			</div>
		</Container>
	)
}
