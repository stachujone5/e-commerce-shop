import { useState } from 'react'
import { NavBurger } from './NavBurger'
import { NavList } from './NavList'

export const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<>
			<NavBurger setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
			<nav
				className={`flex justify-between h-screen left-0 fixed bg-primary z-10 overflow-hidden transition-all border-r ${
					isNavOpen ? 'w-full xs:w-80' : 'w-0'
				}`}>
				<NavList isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			</nav>
		</>
	)
}
