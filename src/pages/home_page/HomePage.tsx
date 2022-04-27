import { useEffect } from 'react'
import { ContactUs } from '../../components/sections/ContactUs'
import { Container } from '../../components/shared/container/Container'
import { ImgSlider } from '../../components/sections/ImgSlider'
import { Layout } from '../../components/shared/layout/Layout'
import { Shop } from '../../components/shop/Shop'

export const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Layout>
			<main>
				<Container>
					<Shop />
					<ImgSlider />
					<ContactUs />
				</Container>
			</main>
		</Layout>
	)
}
