import { useContext, useEffect } from 'react'
import { CartItem } from '../../components/cart_item/CartItem'
import { Container } from '../../components/shared/container/Container'
import { CartContext } from '../../contexts/CartProvider'
import { motion } from 'framer-motion'
import { FADE } from '../../constants/constants'
import { Layout } from '../../components/shared/layout/Layout'
import { Button } from '../../components/shared/button/Buttons'

export const CartPage = () => {
	const { cart } = useContext(CartContext)
	const total = cart.reduce((acc, curr) => {
		return acc + curr.price
	}, 0)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	if (!cart.length) {
		return (
			<Layout>
				<motion.main
					className='min-h-screen mb-24 flex justify-center items-center text-secondary'
					variants={FADE}
					animate='visible'
					initial='hidden'>
					<Container>
						<h2 className='text-center text-2xl'>There is nothing here...</h2>
					</Container>
				</motion.main>
			</Layout>
		)
	}

	return (
		<Layout>
			<motion.main className='min-h-screen my-24' variants={FADE} animate='visible' initial='hidden'>
				<Container>
					<h2 className='text-4xl text-center my-8'>Your Cart</h2>
					<div
						className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${
							cart.length === 1 ? 'place-items-center lg:grid-cols-1' : ''
						}`}>
						{cart.map(item => (
							<CartItem key={item.id} {...item} />
						))}
					</div>
					<div className={`flex items-end justify-between mt-10 ${cart.length === 1 ? 'w-1/2 mx-auto' : ''}`}>
						<p className='py-2'>
							Total cost: <span className='text-secondary transition-colors duration-500'>{total.toFixed(2)}</span> €
						</p>
						<Button>Checkout</Button>
					</div>
				</Container>
			</motion.main>
		</Layout>
	)
}