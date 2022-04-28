import { Link } from 'react-router-dom'
import { ProductInterface } from '../../types/types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import placeholder from '../../images/placeholder.png'
import { useState } from 'react'
import clsx from 'clsx'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const SingleShopItem = ({ id, description, brand, images, price }: ProductInterface) => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<Link
			to={`/${id}`}
			className={clsx('hover:-translate-y-3 transition-all', isLoading && 'opacity-0')}
			onLoad={() => setIsLoading(false)}>
			<div className='flex flex-col max-w-s rounded-lg overflow-hidden shadow-lg'>
				<LazyLoadImage src={images[0]} alt={description} effect='blur' placeholderSrc={placeholder} />
				<div className='p-2 h-32 flex flex-col justify-center bg-zinc-900'>
					<p>{brand}</p>
					<p className='my-2'>{description}</p>
					<p className='text-secondary transition-colors duration-500'>{price} €</p>
				</div>
			</div>
		</Link>
	)
}
