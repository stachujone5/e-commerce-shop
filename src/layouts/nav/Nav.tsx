import { useState } from 'react'
import { NavListDesktop } from './NavListDesktop'
import { NavBurger } from './NavBurger'
import { NavListMobile } from './NavListMobile'

export const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<nav className='flex justify-between p-5 relative'>
			<a href='#blank' className='text-4xl'>
				L O G O
			</a>
			<NavListDesktop />
			<NavBurger setIsNavOpen={setIsNavOpen} />
			<NavListMobile isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</nav>
	)
}
