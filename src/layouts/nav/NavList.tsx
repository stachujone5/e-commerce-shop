import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface NavListProps {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const menuItems = ['man', 'woman', 'kids', 'all', 'cart']

export const NavList = ({ isNavOpen, setIsNavOpen }: NavListProps) => {
	const ulRef = useRef<HTMLUListElement>(null)
	let height: string | number = 0

	const closeNav = () => {
		setIsNavOpen(false)
	}

	if (ulRef.current) {
		height = ulRef.current?.getBoundingClientRect().height! + 20 + 'px'
	}

	return (
		<div
			style={{ height: isNavOpen ? height : '0' }}
			className='h-0 absolute top-full overflow-hidden z-50 transition-all bg-primary right-0 left-0 md:static md:top-auto  md:overflow-visible'>
			<ul ref={ulRef} className='mx-5 md:flex md:gap-5 md:px-5'>
				{menuItems.map((item: string) => {
					return (
						<li key={item}>
							<NavLink
								to={`/${item}`}
								onClick={closeNav}
								className={({ isActive }) =>
									isActive
										? 'border-b-2 border-red-700'
										: 'w-fit relative my-3 before:w-0 before:h-0.5 before:transition-all before:absolute before:bottom-0 before:content-[""] before:bg-red-700 hover:before:w-full'
								}>
								{item}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}