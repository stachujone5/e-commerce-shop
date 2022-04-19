import { useParams } from 'react-router-dom'
import { Container } from '../../components/container/Container'
import { products } from '../../constants/products'
import { ItemImgPreview } from '../../components/item_img_preview/ItemImgPreview'
import { Sizes } from '../../components/sizes/Sizes'
import { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export const Item = () => {
	const { setCart } = useContext(CartContext)
	const [checkedValue, setCheckedValue] = useState<number | null>(null)
	const { id } = useParams()
	const product = products.find(product => product.id === parseInt(id!))
	const [headerType, setHeaderType] = useState(
		<h2 className='text-2xl md:text-3xl md:text-center'>{product?.brand}</h2>
	)

	const header = useRef(<h2 className='text-2xl md:text-3xl md:text-center'>{product?.brand}</h2>)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		setHeaderType(header.current)
	}, [header])

	const handleAddToCart = () => {
		if (checkedValue && product) {
			setCart(prevCart => {
				return [
					...prevCart,
					{
						brand: product?.brand,
						description: product?.description,
						id: product?.id,
						price: product?.price,
						size: checkedValue,
						images: product.images,
					},
				]
			})
			setCheckedValue(null)
			showHeader('success')
			setTimeout(() => {
				showHeader('brand')
			}, 1500)
			return
		}
		showHeader('error')
		setTimeout(() => {
			showHeader('brand')
		}, 1500)
	}

	const showHeader = (action: string) => {
		if (action === 'brand') {
			setHeaderType(<h2 className='text-2xl md:text-3xl md:text-center'>{product?.brand}</h2>)
			header.current = <h2 className='text-2xl md:text-3xl md:text-center'>{product?.brand}</h2>
		} else if (action === 'success') {
			setHeaderType(<h2 className='text-2xl md:text-3xl md:text-center text-green-600'>Item added!</h2>)
			header.current = <h2 className='text-2xl md:text-3xl md:text-center text-green-600'>Item added!</h2>
		} else if (action === 'error') {
			setHeaderType(<h2 className='text-2xl md:text-3xl md:text-center text-red-600'>Pick a size!</h2>)
			header.current = <h2 className='text-2xl md:text-3xl md:text-center text-red-600'>Pick a size!</h2>
		}
	}

	return (
		<Container>
			<div className='md:flex border rounded-3xl overflow-hidden min-height-screen my-24'>
				<ItemImgPreview product={product} />
				<div className='p-5 lg:p-10 md:relative md:w-2/3 md:flex md:flex-col md:justify-between'>
					<div>
						{header.current}
						<p className='my-1 md:my-5 md:text-xl md:text-center'>{product?.description}</p>
					</div>
					<Sizes setCheckedValue={setCheckedValue} checkedValue={checkedValue} />
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
