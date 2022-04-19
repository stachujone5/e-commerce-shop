import { Container } from '../../components/container/Container'

export const Header = () => {
	return (
		<header className='mt-52 min-h-screen my-24'>
			<Container>
				<h1 className='text-center text-2xl'>
					Explore our products made by <span className='border-b-red-700 border-b-2'>best</span> designers from all over
					the world
				</h1>
			</Container>
		</header>
	)
}
