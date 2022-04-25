import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../../components/logo_icon/LogoIcon'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export const headerVariant = {
	visible: {
		y: 0,
		transition: { type: 'spring', stiffness: 400, damping: 20 },
	},
	hidden: {
		y: '-100vh',
	},
}

interface Props {
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ setIsNavOpen }: Props) => {
	return (
		<nav className='fixed top-0 flex justify-between w-full px-10 py-5 bg-neutral-900 z-50'>
			<button
				className='text-4xl cursor-pointer text-secondary transition-colors duration-500'
				onClick={() => setIsNavOpen(prevState => !prevState)}>
				<GiHamburgerMenu />
			</button>
			<Link to='/'>
				<motion.div
					className='flex justify-center items-center gap-5'
					variants={headerVariant}
					initial='hidden'
					animate='visible'>
					<LogoIcon />
					<h1 className='text-center text-4xl text'>L O G O</h1>
				</motion.div>
			</Link>
			<Link to='/cart' className='flex items-center'>
				<AiOutlineShoppingCart className='text-4xl' />
			</Link>
		</nav>
	)
}
