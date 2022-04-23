import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MENU_ITEMS } from '../../constants/constants'
import { CartContext } from '../../contexts/CartProvider'

interface NavListProps {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavList = ({ setIsNavOpen }: NavListProps) => {
	const { cart } = useContext(CartContext)
	return (
		<ul className='my-20'>
			{MENU_ITEMS.map(item => {
				return (
					<li key={item.link} className='p-5 text-sm sm:text-base relative'>
						<Link
							to={item.path}
							onClick={() => setIsNavOpen(false)}
							className='flex gap-2 text-secondary transition-colors duration-500'>
							<item.icon className='text-3xl sm:text-4xl -translate-y-1/4' />
							{item.link}
						</Link>
						{item.link === 'cart' && (
							<span className='absolute top-2 left-9 pointer-events-none bg-black rounded-full font-bold'>
								{cart.length}
							</span>
						)}
					</li>
				)
			})}
		</ul>
	)
}
