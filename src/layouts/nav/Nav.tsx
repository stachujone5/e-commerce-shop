import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBurger } from './NavBurger'
import { NavList } from './NavList'

export const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<nav className='flex justify-between p-5 container mx-auto relative'>
			<Link to='/' className='text-4xl'>
				L O G O
			</Link>
			<NavBurger setIsNavOpen={setIsNavOpen} />
			<NavList isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</nav>
	)
}
