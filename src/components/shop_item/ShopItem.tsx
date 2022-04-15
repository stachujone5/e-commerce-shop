import { productInterface } from '../../products'
import { Link } from 'react-router-dom'

export const ShopItem = ({ id, category, description, brand, images, price }: productInterface) => {
	return (
		<Link to={'/:id'}>
			<div className='flex flex-col max-w-s border rounded overflow-hidden'>
				<img src={images[0]} alt='' className='object-cover' />
				<div className='p-2 h-32 flex flex-col justify-center'>
					<p className=''>{brand}</p>
					<p className='my-2'>{description}</p>
					<p>${price}</p>
				</div>
			</div>
		</Link>
	)
}
