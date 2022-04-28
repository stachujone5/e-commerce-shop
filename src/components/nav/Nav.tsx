import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CartContext } from '../../contexts/CartProvider'
import Icon from '../../images/LogoIcon.svg'

const logoVariants = {
	visible: {
		y: 0,
		transition: { type: 'spring', stiffness: 400, damping: 20 },
	},
	hidden: {
		y: '-100vh',
	},
}

interface Props {
	setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Nav = ({ setIsAsideOpen }: Props) => {
	const { cart } = useContext(CartContext)
	return (
		<nav className='fixed top-0 flex justify-between w-full px-5 md:px-10 py-5 bg-zinc-900 z-40 shadow-lg'>
			<button className='text-4xl cursor-pointer' onClick={() => setIsAsideOpen(prevState => !prevState)}>
				<GiHamburgerMenu />
			</button>
			<Link to='/'>
				<motion.div
					className='flex justify-center items-center gap-2 md:gap-5'
					variants={logoVariants}
					initial='hidden'
					animate='visible'>
					<div className='w-16 md:w-20 -scale-x-100 -translate-y-1'>
						<img src={Icon} alt='LOGO' />
					</div>
					<h1 className='text-center text-2xl md:text-4xl text'>L O G O</h1>
				</motion.div>
			</Link>
			<Link to='/cart' className='flex items-center relative'>
				<AiOutlineShoppingCart className='text-4xl' />
				{cart.length ? (
					<span className='absolute top-3 -right-2 bg-secondary rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-500 pointer-events-none'>
						{cart.length}
					</span>
				) : null}
			</Link>
		</nav>
	)
}
