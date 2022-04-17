import { useLocation } from 'react-router-dom'
import { productInterface, products } from '../../constants/products'
import { SingleShopItem } from '../single_shop_item/SingleShopItem'
import { BrandsFilter } from '../brands_filter/BrandsFilter'
import { useEffect, useState } from 'react'
import { defaultCheckedBrands } from '../../constants/constants'
import { isBrandType } from '../../helpers/helpers'

export const Shop = () => {
	const [isChecked, setIsChecked] = useState(defaultCheckedBrands)
	const [newProducts, setNewProducts] = useState<productInterface[]>()

	const path = useLocation().pathname.slice(1)

	useEffect(() => {
		if (path === 'all') {
			setNewProducts(products)
			return
		}
		setNewProducts(products.filter(product => product.category === path))
	}, [path])

	useEffect(() => {
		const filteredProducts = products.filter(product => {
			return isChecked[product.shortBrand]
		})
		setNewProducts(filteredProducts)
	}, [isChecked])

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = e.target.id

		if (isBrandType(id)) {
			setIsChecked(prevState => {
				return { ...prevState, [id]: !prevState[id] }
			})
		}
	}

	if (!newProducts) return null

	return (
		<section>
			<BrandsFilter isChecked={isChecked} handleCheck={handleCheck} />
			{newProducts.length ? (
				<div className='grid justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-4'>
					{newProducts.map((product: productInterface) => (
						<SingleShopItem key={product.id} {...product} />
					))}
				</div>
			) : (
				<h1 className='text-4xl text-center my-56'>No products matching!</h1>
			)}
		</section>
	)
}
