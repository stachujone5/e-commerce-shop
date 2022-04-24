import { Link } from 'react-router-dom'
import { ProductInterface } from '../../constants/products'

export const SingleShopItem = ({ id, description, brand, images, price }: ProductInterface) => {
	return (
		<Link to={`/${id}`} className='hover:-translate-y-3 transition-all'>
			<div className='flex flex-col max-w-s rounded overflow-hidden border-secondary border-2 transition-colors duration-500'>
				<img src={images[0]} alt={description} className='object-cover' />
				<div className='p-2 h-32 flex flex-col justify-center'>
					<p className=''>{brand}</p>
					<p className='my-2'>{description}</p>
					<p className='text-secondary transition-colors duration-500'>{price} €</p>
				</div>
			</div>
		</Link>
	)
}
