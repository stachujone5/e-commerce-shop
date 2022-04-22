import { useEffect, useState } from 'react'
import { NavBurger } from './NavBurger'
import { NavList } from './NavList'
import { ColorResult, CirclePicker } from 'react-color'

export const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const [color, setColor] = useState('#fff')

	const handleColorChange = (pickedClr: ColorResult) => {
		setColor(pickedClr.hex)
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--clr', color)
	}, [color])

	return (
		<>
			<NavBurger setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
			<nav
				className={`flex justify-between h-screen left-0 top-0 fixed bg-primary z-10 overflow-x-hidden transition-all border-r  ${
					isNavOpen ? 'w-full xs:w-80' : 'w-0'
				}`}>
				<NavList isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
				<p className='text-secondary bottom-36 w-full text-center absolute transition-colors duration-500'>
					Customize!
				</p>
				<CirclePicker
					onChange={handleColorChange}
					color={color}
					className='absolute left-1/2 -translate-x-1/2 bottom-5'
				/>
			</nav>
		</>
	)
}
