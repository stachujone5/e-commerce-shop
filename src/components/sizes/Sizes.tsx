const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]

export const Sizes = () => {
	return (
		<div className='md:mb-5 lg:mb-20'>
			<p className='my-2 lg:text-xl lg:my-5'>Pick your size:</p>
			<div className='grid grid-cols-6 my-2 xl:grid-cols-3'>
				{sizes.map(size => (
					<button key={size} className='border text-center p-2 hover:text-red-600 transition-colors'>
						<p>{size}</p>
					</button>
				))}
			</div>
		</div>
	)
}
