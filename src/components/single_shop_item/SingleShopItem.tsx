import { productInterface } from '../../constants/products'
import { Link } from 'react-router-dom'

export const SingleShopItem = ({ id, description, brand, images, price }: productInterface) => {
	return (
		<Link to={`/${id}`} className='hover:-translate-y-3 transition-all'>
			<div className='flex flex-col max-w-s border rounded overflow-hidden'>
				<img src={images[0]} alt='' className='object-cover' />
				<div className='p-2 h-32 flex flex-col justify-center'>
					<p className=''>{brand}</p>
					<p className='my-2'>{description}</p>
					<p className='text-red-600'>{price} €</p>
				</div>
			</div>
		</Link>
	)
}
