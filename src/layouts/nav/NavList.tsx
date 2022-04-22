import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../constants/products'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { MENU_ITEMS } from '../../constants/constants'

interface NavListProps {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavList = ({ setIsNavOpen }: NavListProps) => {
	return (
		<ul className='my-20'>
			{MENU_ITEMS.map(item => {
				return (
					<li key={item.link} className='p-5'>
						<Link to={`/${item.link}`} onClick={() => setIsNavOpen(false)} className='flex gap-2 text'>
							<item.icon className='text-4xl' />
							{item.link}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
