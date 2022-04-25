import { useEffect, useState } from 'react'
import { ColorResult, CirclePicker } from 'react-color'
import { IoClose } from 'react-icons/io5'
import { BrandsFilter } from '../../components/brands_filter/BrandsFilter'

interface Props {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Aside = ({ isNavOpen, setIsNavOpen }: Props) => {
	const [color, setColor] = useState('#9C27B0')

	const handleColorChange = (pickedClr: ColorResult) => {
		setColor(pickedClr.hex)
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--clr', color)
	}, [color])

	return (
		<aside
			className={`flex justify-between h-screen left-0 top-0 fixed bg-primary z-50 overflow-x-hidden transition-transform w-full sm:w-80 border-r ${
				isNavOpen ? 'translate-x-0' : '-translate-x-full'
			}`}>
			<button className='absolute top-5 right-5 text-4xl' onClick={() => setIsNavOpen(false)}>
				<IoClose />
			</button>
			<BrandsFilter />
			<div className='absolute left-1/2 -translate-x-1/2 bottom-5'>
				<p className='text-center mb-2 text-secondary transition-colors duration-500'>Customize!</p>
				<CirclePicker onChange={handleColorChange} color={color} />
			</div>
		</aside>
	)
}
