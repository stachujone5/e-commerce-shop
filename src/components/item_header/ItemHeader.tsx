import { ProductInterface } from '../../constants/products'

export interface ItemHeaderProps {
	product: ProductInterface | undefined
	headerType: string
}

export const ItemHeader = ({ product, headerType }: ItemHeaderProps) => {
	if (headerType === 'error') {
		return <h2 className='text-2xl md:text-3xl md:text-center text-red-600 transition-colors'>Pick a size!</h2>
	}

	if (headerType === 'success') {
		return <h2 className='text-2xl md:text-3xl md:text-center text-green-600 transition-colors'>Item added!</h2>
	}

	return <h2 className='text-2xl md:text-3xl md:text-center transition-colors'>{product?.brand}</h2>
}
