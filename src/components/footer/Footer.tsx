import { Container } from '../shared/Container'

export const Footer = () => {
	return (
		<footer className='mt-10 border-t border-white/20'>
			<Container>
				<p className='text-center'>
					L O G O &copy; <span className='text-secondary'>{new Date().getFullYear()}</span> All rights reserved
				</p>
			</Container>
		</footer>
	)
}
