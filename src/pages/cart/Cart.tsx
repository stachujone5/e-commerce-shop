import { useContext } from 'react'
import { CartItem } from '../../components/cart_item/CartItem'
import { Container } from '../../components/container/Container'
import { CartContext } from '../../contexts/CartProvider'

export const Cart = () => {
	const { cart } = useContext(CartContext)

	return (
		<Container>
			<div className='min-h-screen my-24'>
				{cart.map(item => (
					<CartItem key={item.id} cartItem={item} />
				))}{' '}
			</div>
		</Container>
	)
}
