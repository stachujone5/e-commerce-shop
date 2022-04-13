import { Link } from 'react-router-dom'

const categories = ['man', 'woman', 'kids', 'all']

export const NavDesktop = () => {
	return (
		<ul className='gap-5 md:flex hidden mx-5'>
			{categories.map(category => {
				return (
					<li className='my-3' key={category}>
						<Link to={`/${category}`}>{category}</Link>
					</li>
				)
			})}
		</ul>
	)
}
