import { motion } from 'framer-motion'

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
			<motion.h1
				className='text-center text-4xl my-24 text'
				variants={headerVariant}
				initial='hidden'
				animate='visible'>
				L O G O
			</motion.h1>
		</header>
	)
}
