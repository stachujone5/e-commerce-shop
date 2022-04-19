import { useParams } from 'react-router-dom'
import { Container } from '../../components/container/Container'
import { products } from '../../constants/products'
import { ItemImgPreview } from '../../components/item_img_preview/ItemImgPreview'
import { Sizes } from '../../components/sizes/Sizes'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export const Item = () => {
	const { id } = useParams()
	const product = products.find(product => product.id === parseInt(id!))
	const { setCart } = useContext(CartContext)
	const [size, setSize] = useState<number | null>(null)

	const handleAddToCart = () => {
		if (size && product) {
			setCart(prevCart => {
				return [
					...prevCart,
					{
						brand: product?.brand,
						description: product?.description,
						id: product?.id,
						price: product?.price,
						size: size,
					},
				]
			})
		}
	}

	return (
		<Container>
			<div className='md:flex border rounded-3xl overflow-hidden my-6'>
				<ItemImgPreview product={product} />
				<div className='p-5 lg:p-10 md:relative md:w-2/3 md:flex md:flex-col md:justify-between'>
					<div>
						<h2 className='text-2xl md:text-3xl md:text-center'>{product?.brand}</h2>
						<p className='my-1 md:my-5 md:text-xl md:text-center'>{product?.description}</p>
					</div>
					<Sizes setSize={setSize} />
					<div className='flex justify-between mt-5'>
						<p className='text-red-500 md:text-lg lg:text-2xl p-2'>{product?.price} €</p>
						<button
							className='p-2 border rounded-lg md:text-lg hover:text-primary hover:bg-white transition-colors'
							onClick={handleAddToCart}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</Container>
	)
}
