import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { ProductInterface } from '../../types/types'

interface Props {
	product: ProductInterface
}

export const ItemImgPreview = ({ product }: Props) => {
	const [transform, setTransform] = useState(0)

	const handleNextImg = () => {
		setTransform(prevTransform => {
			if (prevTransform / 100 >= product?.images.length - 1) {
				return 0
			}
			return prevTransform + 100
		})
	}

	const handlePrevImg = () => {
		setTransform(prevTransform => {
			if (prevTransform === 0) {
				return 100 * (product?.images.length - 1)
			}
			return prevTransform - 100
		})
	}

	return (
		<div className='relative md:w-1/2 xl:w-1/3 overflow-hidden'>
			<div className='flex transition-all' style={{ transform: `translateX(-${transform}%)` }}>
				<img src={product.images[0]} alt={product?.description} />
				<img src={product.images[1]} alt={product.description} />
				<img src={product.images[2]} alt={product.description} />
				<img src={product.images[3]} alt={product.description} />
				<img src={product.images[4]} alt={product.description} />
			</div>
			<button onClick={handlePrevImg} className='text-3xl text-black absolute bottom-5 left-5'>
				<FaArrowLeft />
			</button>
			<button onClick={handleNextImg} className='text-3xl text-black absolute bottom-5 right-5'>
				<FaArrowRight />
			</button>
		</div>
	)
}
