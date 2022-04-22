import { useParams } from 'react-router-dom'
import { Container } from '../../components/container/Container'
import { PRODUCTS } from '../../constants/products'
import { ItemImgPreview } from '../../components/item_img_preview/ItemImgPreview'
import { Sizes } from '../../components/sizes/Sizes'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { ItemHeader } from '../../components/item_header/ItemHeader'
import { v4 } from 'uuid'

export const Item = () => {
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
		<main className='min-h-screen flex justify-center items-center'>
			<Container>
				<div className='md:flex border-2 border-secondary rounded-3xl overflow-hidden my-24 transition-colors duration-500'>
					<ItemImgPreview product={product} />
					<div className='p-5 lg:p-10 md:relative md:w-2/3 md:flex md:flex-col md:justify-between'>
						<div>
							<ItemHeader product={product} headerType={headerType} />
							<p className='my-1 md:my-5 md:text-xl md:text-center'>{product?.description}</p>
						</div>
						<Sizes setCheckedValue={setCheckedValue} checkedValue={checkedValue} />
						<div className='flex justify-between mt-5'>
							<p className='text-white md:text-lg lg:text-2xl p-2'>{product?.price} €</p>
							<button
								className='p-2 border border-secondary rounded-lg md:text-lg hover:bg-secondary transition-colors duration-300'
								onClick={handleAddToCart}>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</Container>
		</main>
	)
}
