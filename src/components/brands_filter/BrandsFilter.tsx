import { AiOutlineShoppingCart } from 'react-icons/ai'
import { brandInterface } from '../shop/Shop'

const brands: brandInterface[] = ['Nike', 'Adidas', 'New Balance', 'Vans']

interface BrandsFilterProps {
	isChecked: { Nike: boolean; Adidas: boolean; 'New Balance': boolean; Vans: boolean }
	handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const BrandsFilter = ({ isChecked, handleCheck }: BrandsFilterProps) => {
	return (
		<div className='flex justify-between'>
			<div className='flex gap-4'>
				{brands.map(brand => {
					return (
						<div key={brand}>
							<label htmlFor={brand} className={isChecked[brand] ? 'border-b-2 cursor-pointer' : 'cursor-pointer'}>
								{brand}
							</label>
							<input type='checkbox' id={brand} className='hidden' onChange={handleCheck} defaultChecked />
						</div>
					)
				})}
			</div>
			<AiOutlineShoppingCart className='text-6xl' />
		</div>
	)
}
