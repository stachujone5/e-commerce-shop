import { HeaderType, ProductInterface } from '../../types/types'

interface Props {
	product: ProductInterface
	header: HeaderType
}

export const ItemHeader = ({ product, header }: Props) => {
	if (header === 'error') {
		return <h2 className='text-2xl md:text-3xl md:text-center text-red-600'>Pick a size!</h2>
	}

	if (header === 'success') {
		return <h2 className='text-2xl md:text-3xl md:text-center text-green-600'>Item added!</h2>
	}

	return <h2 className='text-2xl md:text-3xl md:text-center'>{product?.brand}</h2>
}
