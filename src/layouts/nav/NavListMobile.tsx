import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { menuItems } from '../../constants/menuItems'

interface NavListMobileProps {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavListMobile = ({ isNavOpen, setIsNavOpen }: NavListMobileProps) => {
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
			className='h-0 absolute top-full overflow-hidden z-50 transition-all bg-primary right-0 left-0 px-5 md:hidden'>
			<ul ref={ulRef}>
				{menuItems.map((item: string) => {
					return (
						<li className='my-3' key={item}>
							<Link to={`/${item}`} onClick={closeNav}>
								{item}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
