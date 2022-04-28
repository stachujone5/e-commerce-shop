import { Link } from 'react-router-dom'
import { Container } from '../../components/shared/Container'
import { Layout } from '../../components/shared/Layout'

export const ErrorPage = () => {
	return (
		<Layout>
			<main>
				<Container>
					<div className='h-screen flex flex-col gap-8 justify-center items-center'>
						<h2 className='text-4xl text-center'>Ups... It looks like this page doesn't exist!</h2>
						<Link
							to='/'
							className='rounded-lg border py-3 px-6 border-secondary hover:text-secondary transition-colors duration-300'>
							Take me back!
						</Link>
					</div>
				</Container>
			</main>
		</Layout>
	)
}
