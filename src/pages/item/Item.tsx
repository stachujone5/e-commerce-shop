import { useParams } from 'react-router-dom'
import { Container } from '../../components/container/Container'
import { products } from '../../products'
import { ItemImgPreview } from '../../components/item_img_preview/ItemImgPreview'

export const Item = () => {
	const { id } = useParams()
	const product = products.find(product => product.id === parseInt(id!))

	return (
		<Container>
			<div className='flex border rounded-3xl overflow-hidden'>
				<ItemImgPreview product={product} />
				<div>
					<h2>{product?.brand}</h2>
					<p>{product?.description}</p>
				</div>
			</div>
		</Container>
	)
}
