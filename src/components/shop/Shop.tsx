import { useLocation } from 'react-router-dom'
import { productInterface, products } from '../../products'
import { SingleShopItem } from '../single_shop_item/SingleShopItem'
import { BrandsFilter } from '../brands_filter/BrandsFilter'
import { useEffect, useState } from 'react'

export type brandInterface = 'Nike' | 'Adidas' | 'New Balance' | 'Vans'

export const Shop = () => {
	const { pathname } = useLocation()
	const path = pathname.slice(1)
	const checkedBrands = { Nike: true, Adidas: true, 'New Balance': true, Vans: true }
	const [isChecked, setIsChecked] = useState(checkedBrands)
	const [newProducts, setNewProducts] = useState<productInterface[]>()

	useEffect(() => {
		if (path === 'all') {
			setNewProducts(products)
			return
		}
		setNewProducts(products.filter(product => product.category === path))
	}, [path])

	useEffect(() => {
		const filteredProducts = products.filter(product => {
			console.log(product.shortBrand)
			console.log(isChecked[product.shortBrand])
			return isChecked[product.shortBrand]
		})
		setNewProducts(filteredProducts)
	}, [isChecked])

	const handleCheck = (e: any) => {
		const id: brandInterface = e.target.id
		setIsChecked(prevState => {
			return { ...prevState, [id]: !prevState[id] }
		})
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
