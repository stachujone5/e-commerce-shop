import Slider from 'react-slick'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
}

export const ImgSlider = () => {
	return (
		<Slider {...settings} className='w-3/4 mx-auto max-w-4xl my-16'>
			<div>
				<img src='https://i.pinimg.com/originals/70/b7/5f/70b75f00a5681f8473b20d09fb0d3db5.jpg' alt='' />
			</div>
			<div>
				<h3>2</h3>
			</div>
			<div>
				<h3>3</h3>
			</div>
			<div>
				<h3>4</h3>
			</div>
			<div>
				<h3>5</h3>
			</div>
			<div>
				<h3>6</h3>
			</div>
		</Slider>
	)
}
