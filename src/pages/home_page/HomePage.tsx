import { useEffect } from 'react'
import { ContactUs } from '../../components/contact_us/ContactUs'
import { Container } from '../../components/container/Container'
import { ImgSlider } from '../../components/img_slider/ImgSlider'
import { Layout } from '../../components/layout/Layout'
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