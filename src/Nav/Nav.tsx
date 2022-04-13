import { NavDesktop } from './NavDesktop'
import { NavMobile } from './NavMobile'

export const Nav = () => {
	return (
		<nav className='flex justify-between p-5'>
			<a href='#blank' className='text-4xl'>
				L O G O
			</a>
			<NavDesktop />
			<NavMobile />
		</nav>
	)
}
