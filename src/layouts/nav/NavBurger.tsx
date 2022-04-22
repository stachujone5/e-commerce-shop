import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

interface NavMobileProps {
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
	isNavOpen: boolean
}

export const NavBurger = ({ setIsNavOpen, isNavOpen }: NavMobileProps) => {
	const handleNav = () => {
		setIsNavOpen(prevState => !prevState)
	}
	return (
		<button className='text-4xl cursor-pointer fixed top-4 left-4 z-50 text-secondary' onClick={handleNav}>
			{isNavOpen ? <IoClose /> : <GiHamburgerMenu />}
		</button>
	)
}
