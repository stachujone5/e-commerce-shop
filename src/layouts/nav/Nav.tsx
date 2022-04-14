import { useState } from 'react'
import { NavBurger } from './NavBurger'
import { NavList } from './NavList'

export const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<nav className='flex justify-between p-5 relative'>
			<a href='#blank' className='text-4xl'>
				L O G O
			</a>
			<NavBurger setIsNavOpen={setIsNavOpen} />
			<NavList isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</nav>
	)
}
