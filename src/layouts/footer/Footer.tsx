import { Container } from '../../components/container/Container'

export const Footer = () => {
	return (
		<footer>
			<Container>
				<p className='text-center'>L O G O &copy; {new Date().getFullYear()} All rights reserved</p>
			</Container>
		</footer>
	)
}
