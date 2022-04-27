import { useContext, useEffect } from 'react'
import { ColorResult, CirclePicker } from 'react-color'
import { IoClose } from 'react-icons/io5'
import { BrandsFilter } from '../../components/aside/BrandsFilter'
import { Sorter } from '../../components/aside/Sorter'
import { ColorContext } from '../../contexts/ColorProvider'
import clsx from 'clsx'
import Icon from '../../images/LogoIcon.svg'

interface Props {
	isAsideOpen: boolean
	setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Aside = ({ isAsideOpen, setIsAsideOpen }: Props) => {
	const { color, setColor } = useContext(ColorContext)
	const handleColorChange = (pickedClr: ColorResult) => {
		setColor(pickedClr.hex)
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--clr', color)
	}, [color])

	return (
		<>
			<aside
				className={clsx(
					'flex flex-col justify-between h-screen left-0 top-0 fixed bg-primary z-50 overflow-x-hidden transition-transform w-full sm:w-80 p-5 text-textDark -translate-x-full',
					isAsideOpen && 'translate-x-0'
				)}>
				<div className='flex justify-between'>
					<img src={Icon} alt='LOGO' className='w-16 md:w-20 -translate-y-2 -scale-x-100' />
					<button className='text-4xl text-textLight' onClick={() => setIsAsideOpen(false)}>
						<IoClose />
					</button>
				</div>
				<BrandsFilter />
				<Sorter />
				<div>
					<p className='text-center bg-navLight rounded-lg p-2 text-textLight mb-5'>Customize!</p>
					<CirclePicker onChange={handleColorChange} color={color} className='translate-x-2 sm:translate-x-5' />
				</div>
			</aside>
			<div
				onClick={() => setIsAsideOpen(false)}
				className={clsx(
					'bg-black/80 fixed top-0 left-0 bottom-0 right-0 z-40 transition-opacity',
					isAsideOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'
				)}></div>
		</>
	)
}
