import { MouseEvent, useState } from 'react'
import { productInterface } from '../../products'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { Button } from '../../components/button/Button'

interface ItemImgPreviewProps {
	product: productInterface | undefined
}

export const ItemImgPreview = ({ product }: ItemImgPreviewProps) => {
	const [transform, setTransform] = useState(0)

	const handleNextImg = () => {
		if (!product) return
		setTransform(prevTransform => {
			if (prevTransform / 100 >= product?.images.length - 1) {
				return 0
			}
			return prevTransform + 100
		})
	}

	const handlePrevImg = () => {
		if (!product) return
		setTransform(prevTransform => {
			if (prevTransform === 0) {
				return 100 * (product?.images.length - 1)
			}
			return prevTransform - 100
		})
	}

	const handleMouseMove = (e: MouseEvent) => {}

	return (
		<div className='relative md:w-1/3 overflow-hidden' onMouseMove={handleMouseMove}>
			<div className='flex transition-all' style={{ transform: `translateX(-${transform}%)` }}>
				<img src={product?.images[0]} alt={product?.description} />
				<img src={product?.images[1]} alt={product?.description} />
				<img src={product?.images[2]} alt={product?.description} />
				<img src={product?.images[3]} alt={product?.description} />
				<img src={product?.images[4]} alt={product?.description} />
			</div>
			<Button icon={<FaArrowLeft />} className='absolute bottom-5 left-5' onClick={handlePrevImg} />
			<Button icon={<FaArrowRight />} className='absolute bottom-5 right-5' onClick={handleNextImg} />
		</div>
	)
}
