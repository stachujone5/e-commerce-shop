import { motion } from 'framer-motion'
import { LogoIcon } from '../../components/logo_icon/LogoIcon'

export const headerVariant = {
	visible: {
		y: 0,
		transition: { type: 'spring', stiffness: 400, damping: 20 },
	},
	hidden: {
		y: '-100vh',
	},
}

export const Header = () => {
	return (
		<header>
			<motion.div
				className='flex justify-center items-center gap-5 mt-24 md:my-24'
				variants={headerVariant}
				initial='hidden'
				animate='visible'>
				<LogoIcon />
				<h1 className='text-center text-4xl text'>L O G O</h1>
			</motion.div>
		</header>
	)
}
