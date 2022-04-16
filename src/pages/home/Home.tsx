import { ContactUs } from '../../components/contact_us/ContactUs'
import { Container } from '../../components/container/Container'
import { ImgSlider } from '../../components/img_slider/ImgSlider'
import { Shop } from '../../components/shop/Shop'
import { Header } from '../../layouts/header/Header'

export const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<Shop />
					<ImgSlider />
					<ContactUs />
				</Container>
			</main>
		</>
	)
}
