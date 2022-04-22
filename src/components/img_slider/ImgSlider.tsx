import Slider from 'react-slick'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'

const settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
			},
		},
	],
}

export const ImgSlider = () => {
	return (
		<section className='mt-16'>
			<h2 className='text-center text-3xl'>Gallery</h2>
			<Slider {...settings} className='my-16'>
				<div className='px-10'>
					<img src={img1} alt='' />
				</div>
				<div className='px-10'>
					<img src={img2} alt='' />
				</div>
				<div className='px-10'>
					<img src={img3} alt='' />
				</div>
				<div className='px-10'>
					<img src={img4} alt='' />
				</div>
				<div className='px-10'>
					<img src={img5} alt='' />
				</div>
			</Slider>
		</section>
	)
}
