import { Link } from 'react-router-dom'
import { menuItems } from '../../constants/menuItems'

export const NavListDesktop = () => {
	return (
		<ul className='gap-5 md:flex hidden mx-5'>
			{menuItems.map((item: string) => {
				return (
					<li className='my-3' key={item}>
						<Link to={`/${item}`}>{item}</Link>
					</li>
				)
			})}
		</ul>
	)
}
