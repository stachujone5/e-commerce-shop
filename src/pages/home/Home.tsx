import { ContactUs } from '../../components/contact_us/ContactUs'
import { Container } from '../../components/container/Container'
import { ImgSlider } from '../../components/img_slider/ImgSlider'
import { Shop } from '../../components/shop/Shop'
import { Header } from '../../layouts/header/Header'
import { ColorResult, CirclePicker } from 'react-color'
import { useState } from 'react'

export const Home = () => {
	const [color, setColor] = useState('#fff')

	const handleColorChange = (color: ColorResult) => {
		setColor(color.hex)
	}
	return (
		<>
			{/* <Header /> */}
			<main>
				<Container>
					{/* <CirclePicker onChange={handleColorChange} color={color} /> */}
					<Shop />
					<ImgSlider />
					<ContactUs />
				</Container>
			</main>
		</>
	)
}
