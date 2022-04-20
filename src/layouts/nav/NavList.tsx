import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { MENU_ITEMS } from '../../constants/constants'
import { PRODUCTS } from '../../constants/products'
import { ProductsContext } from '../../contexts/ProductsProvider'

interface NavListProps {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavList = ({ isNavOpen, setIsNavOpen }: NavListProps) => {
	const { setProducts } = useContext(ProductsContext)
	const ulRef = useRef<HTMLUListElement>(null)
	let height: string | number = 0

	if (ulRef.current) {
		height = ulRef.current?.getBoundingClientRect().height! + 20 + 'px'
	}

	const handleCategoryChange = (category: string) => {
		console.log(category)
		if (category === 'all') {
			setProducts(PRODUCTS)
			return
		}

		setProducts(PRODUCTS.filter(product => product.category === category))
		console.log(PRODUCTS.filter(product => product.category === category))
		setIsNavOpen(false)
	}

	return (
		<div
			style={{ height: isNavOpen ? height : '0' }}
			className='h-0 absolute top-full overflow-hidden z-50 transition-all bg-primary/90 right-0 left-0 md:static md:top-auto  md:overflow-visible'>
			<ul ref={ulRef} className='mx-5 md:flex md:gap-5 md:px-5'>
				{MENU_ITEMS.map((item: string) => {
					return (
						<li key={item}>
							<NavLink
								to={`/${item}`}
								onClick={() => handleCategoryChange(item)}
								className={({ isActive }) =>
									isActive
										? 'border-b-2 border-red-700'
										: 'w-fit relative my-3 before:w-0 before:h-0.5 before:transition-all before:absolute before:bottom-0 before:content-[""] before:bg-red-700 hover:before:w-full'
								}>
								{item}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
