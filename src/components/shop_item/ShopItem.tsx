import { productInterface } from '../../products'

export const ShopItem = ({ id, category, description, images, price }: productInterface) => {
	return (
		<div className='relative m-5 last:hover:top-0'>
			<img src={images[0]} alt='' className='h-100' />
			<div className='absolute bottom-0 left-0 right-0 top-3/4 bg-primary/90 '>
				<h3 className='text-center '>{description}</h3>
			</div>
		</div>
	)
}
