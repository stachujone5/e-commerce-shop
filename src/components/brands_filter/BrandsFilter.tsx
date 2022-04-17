import { BRANDS } from '../../constants/constants'

interface BrandsFilterProps {
	isChecked: { Nike: boolean; Adidas: boolean; 'New Balance': boolean; Vans: boolean }
	handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const BrandsFilter = ({ isChecked, handleCheck }: BrandsFilterProps) => {
	return (
		<div className='flex gap-4 mb-5 md:mb-7'>
			{BRANDS.map(brand => {
				return (
					<div key={brand} className='text-sm sm:text-base md:text-xl'>
						<label htmlFor={brand} className={isChecked[brand] ? 'border-b-2 cursor-pointer' : 'cursor-pointer'}>
							{brand}
						</label>
						<input type='checkbox' id={brand} className='hidden' onChange={handleCheck} defaultChecked />
					</div>
				)
			})}
		</div>
	)
}
