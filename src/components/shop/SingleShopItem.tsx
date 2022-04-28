import { Link } from 'react-router-dom'
import { ProductInterface } from '../../types/types'

export const SingleShopItem = ({ id, description, brand, images, price }: ProductInterface) => {
	return (
		<Link to={`/${id}`} className='hover:-translate-y-3 transition-all'>
			<div className='flex flex-col max-w-s rounded-lg overflow-hidden shadow-lg'>
				<img src={images[0]} alt={description} />
				<div className='p-2 h-32 flex flex-col justify-center bg-zinc-900'>
					<p>{brand}</p>
					<p className='my-2'>{description}</p>
					<p className='text-secondary transition-colors duration-500'>{price} €</p>
				</div>
			</div>
		</Link>
	)
}
