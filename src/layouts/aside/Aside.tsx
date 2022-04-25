import { useContext, useEffect } from 'react'
import { ColorResult, CirclePicker } from 'react-color'
import { IoClose } from 'react-icons/io5'
import { BrandsFilter } from '../../components/brands_filter/BrandsFilter'
import { Sorter } from '../../components/sorter/Sorter'
import { ColorContext } from '../../contexts/ColorProvider'
import Icon from '../../images/LogoIcon.svg'

interface Props {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Aside = ({ isNavOpen, setIsNavOpen }: Props) => {
	const { color, setColor } = useContext(ColorContext)
	const handleColorChange = (pickedClr: ColorResult) => {
		setColor(pickedClr.hex)
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--clr', color)
	}, [color])

	return (
		<aside
			className={`flex flex-col justify-between h-screen left-0 top-0 fixed bg-navDark z-50 overflow-x-hidden transition-transform w-full sm:w-80 p-5 text-navTextDark ${
				isNavOpen ? 'translate-x-0' : '-translate-x-full'
			}`}>
			<div className='flex justify-between'>
				<img src={Icon} alt='LOGO' className='w-16 md:w-20 -translate-y-2 -scale-x-100' />
				<button className='text-4xl text-navTextLight' onClick={() => setIsNavOpen(false)}>
					<IoClose />
				</button>
			</div>

			<div className='mt-32'>
				<BrandsFilter />
				<Sorter />
			</div>
			<div className='translate-x-4'>
				<p className='text-center mb-2 text-secondary transition-colors duration-500 -translate-x-2'>Customize!</p>
				<CirclePicker onChange={handleColorChange} color={color} className='translate-x-2' />
			</div>
		</aside>
	)
}
