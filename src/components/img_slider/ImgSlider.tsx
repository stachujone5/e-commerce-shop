import Slider from 'react-slick'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import { SETTINGS } from '../../constants/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const ImgSlider = () => {
	return (
		<section className='mt-16'>
			<h2 className='text-center text-3xl'>Gallery</h2>
			<Slider {...SETTINGS} className='my-16'>
				<div className='px-10'>
					<LazyLoadImage src={img1} alt="One of the LOGO's shoes" />
				</div>
				<div className='px-10'>
					<LazyLoadImage src={img2} alt="One of the LOGO's shoes" />
				</div>
				<div className='px-10'>
					<LazyLoadImage src={img3} alt="One of the LOGO's shoes" />
				</div>
				<div className='px-10'>
					<LazyLoadImage src={img4} alt="One of the LOGO's shoes" />
				</div>
				<div className='px-10'>
					<LazyLoadImage src={img5} alt="One of the LOGO's shoes" />
				</div>
			</Slider>
		</section>
	)
}
