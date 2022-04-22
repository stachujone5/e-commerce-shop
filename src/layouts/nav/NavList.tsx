import React from 'react'
import { Link } from 'react-router-dom'
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
					<li key={item.link} className='p-5 text-sm sm:text-base'>
						<Link to={item.path} onClick={() => setIsNavOpen(false)} className='flex gap-2 text-secondary'>
							<item.icon className='text-3xl sm:text-4xl -translate-y-1/4' />
							{item.link}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
