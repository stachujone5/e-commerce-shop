import { useParams } from 'react-router-dom'
import { Container } from '../../components/container/Container'
import { PRODUCTS } from '../../constants/products'
import { ItemImgPreview } from '../../components/item_img_preview/ItemImgPreview'
import { Sizes } from '../../components/sizes/Sizes'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { ItemHeader } from '../../components/item_header/ItemHeader'
import { v4 } from 'uuid'
import { motion } from 'framer-motion'
import { FADE } from '../../constants/constants'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/button/Buttons'

export const ItemPage = () => {
	const [checkedValue, setCheckedValue] = useState<number | null>(null)
	const [headerType, setHeaderType] = useState('brand')
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
						brand: product?.brand,
						description: product?.description,
						id: v4(),
						price: product?.price,
						size: checkedValue,
						images: product.images,
						count: 0,
					},
				]
			})
			setCheckedValue(null)
			setHeaderType('success')
			setTimeout(() => {
				setHeaderType('brand')
			}, 1500)
			return
		}

		setHeaderType('error')
		setTimeout(() => {
			setHeaderType('brand')
		}, 1500)
	}

	return (
		<Layout>
			<motion.main
				className='min-h-screen flex justify-center items-center my-12'
				variants={FADE}
				animate='visible'
				initial='hidden'>
				<Container>
					<div className='md:flex border-2 border-secondary rounded-3xl overflow-hidden my-24 transition-colors duration-500'>
						<ItemImgPreview product={product} />
						<div className='p-5 lg:p-10 md:relative md:w-2/3 md:flex md:flex-col md:justify-between'>
							<div>
								<ItemHeader product={product} headerType={headerType} />
								<p className='my-1 md:my-5 md:text-xl md:text-center'>{product?.description}</p>
							</div>
							<Sizes setCheckedValue={setCheckedValue} checkedValue={checkedValue} category={product?.category} />
							<div className='flex justify-between mt-5'>
								<p className='text-white md:text-lg lg:text-2xl p-2'>{product?.price} €</p>
								<Button onClick={handleAddToCart}>Add to cart</Button>
							</div>
						</div>
					</div>
				</Container>
			</motion.main>
		</Layout>
	)
}
