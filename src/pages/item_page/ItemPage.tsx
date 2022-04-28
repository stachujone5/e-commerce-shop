import { useParams } from 'react-router-dom'
import { Container } from '../../components/shared/Container'
import { PRODUCTS } from '../../constants/products'
import { ItemImgPreview } from '../../components/item/ItemImgPreview'
import { ItemSizes } from '../../components/item/ItemSizes'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { ItemHeader } from '../../components/item/ItemHeader'
import { v4 } from 'uuid'
import { motion } from 'framer-motion'
import { FADE } from '../../constants/constants'
import { Layout } from '../../components/shared/Layout'
import { Button } from '../../components/shared/Button'
import { ErrorPage } from '../error_page/ErrorPage'
import { HeaderType } from '../../types/types'

export const ItemPage = () => {
	const [checkedValue, setCheckedValue] = useState<number | null>(null)
	const [header, setHeader] = useState<HeaderType>('brand')
	const { setCart } = useContext(CartContext)
	const { id } = useParams()
	const product = PRODUCTS.find(product => product.id === parseInt(id!))

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const handleAddToCart = () => {
		if (checkedValue && product) {
			setCart(prevCart => {
				return [
					...prevCart,
					{
						brand: product.brand,
						description: product.description,
						cartId: v4(),
						id: product.id,
						price: product.price,
						size: checkedValue,
						images: product.images,
						count: 0,
					},
				]
			})
			setCheckedValue(null)
			setHeader('success')
			setTimeout(() => {
				setHeader('brand')
			}, 1500)
			return
		}

		setHeader('error')
		setTimeout(() => {
			setHeader('brand')
		}, 1500)
	}

	if (!product) {
		return <ErrorPage />
	}

	return (
		<Layout>
			<motion.main
				className='min-h-screen flex justify-center items-center my-12'
				variants={FADE}
				animate='visible'
				initial='hidden'>
				<Container>
					<div className='md:flex rounded-2xl overflow-hidden my-24 bg-zinc-900 shadow-lg'>
						<ItemImgPreview product={product} />
						<div className='p-5 lg:p-10 md:relative md:w-2/3 md:flex md:flex-col md:justify-between'>
							<div>
								<ItemHeader product={product} header={header} />
								<p className='my-3 md:my-5 md:text-xl md:text-center'>{product.description}</p>
							</div>
							<ItemSizes setCheckedValue={setCheckedValue} checkedValue={checkedValue} category={product.category} />
							<div className='flex justify-between mt-5'>
								<p className='text-white md:text-lg lg:text-2xl p-2'>{product.price} €</p>
								<Button onClick={handleAddToCart}>Add to cart</Button>
							</div>
						</div>
					</div>
				</Container>
			</motion.main>
		</Layout>
	)
}
