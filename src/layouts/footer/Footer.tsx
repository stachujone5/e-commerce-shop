import { Container } from '../../components/container/Container'

export const Footer = () => {
	return (
		<footer className='mt-10 border-t border-white/20'>
			<Container>
				<p className='text-center'>L O G O &copy; {new Date().getFullYear()} All rights reserved</p>
			</Container>
		</footer>
	)
}
