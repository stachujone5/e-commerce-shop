import { useContext } from 'react'
import { CartItem } from '../../components/cart_item/CartItem'
import { Container } from '../../components/container/Container'
import { CartContext } from '../../contexts/CartProvider'

export const Cart = () => {
	const { cart } = useContext(CartContext)
	const total = cart.reduce((acc, curr) => {
		return acc + curr.price
	}, 0)

	if (!cart.length) {
		return (
			<Container>
				<div className='min-h-screen mb-24 flex justify-center items-center text-secondary transition-colors duration-500'>
					<h2>There is nothing here...</h2>
				</div>
			</Container>
		)
	}

	return (
		<Container>
			<div className='min-h-screen my-24'>
				<h2 className='text-4xl text-center my-8'>Your Cart</h2>
				<button className='p-2 bg-secondary rounded-lg transition-colors duration-500'>Checkout</button>
				<p>
					Total cost: <span className='text-secondary transition-colors duration-500'>{total}</span> €
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					{cart.map(item => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
			</div>
		</Container>
	)
}
