import { GiHamburgerMenu } from 'react-icons/gi'

interface NavMobileProps {
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavBurger = ({ setIsNavOpen }: NavMobileProps) => {
	const handleNav = () => {
		setIsNavOpen(prevState => !prevState)
	}
	return (
		<button className='md:hidden text-4xl cursor-pointer' onClick={handleNav}>
			<GiHamburgerMenu />
		</button>
	)
}
