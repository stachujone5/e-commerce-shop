import { useContext, useEffect, useState, Fragment } from 'react'
import { SORTING_CATEGORIES } from '../../constants/constants'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { sort } from '../../helpers/sort'
import { Rows } from '../shared/Rows'
import { isCriteriaType } from '../../helpers/helpers'
import { CriteriaType } from '../../types/types'
import clsx from 'clsx'

export const Sorter = () => {
	const [checked, setChecked] = useState<CriteriaType>('Price Descending')
	const { tempProducts, setTempProducts } = useContext(ProductsContext)

	useEffect(() => {
		if (checked) {
			const sortedProducts = sort(checked, tempProducts)
			setTempProducts([...sortedProducts])
		}
	}, [checked, tempProducts, setTempProducts])

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isCriteriaType(e.target.id)) {
			setChecked(e.target.id)
		}
	}

	return (
		<Rows title='Sort By'>
			{SORTING_CATEGORIES.map(category => (
				<Fragment key={category}>
					<input
						type='radio'
						id={category}
						className='hidden'
						name='sorting'
						onChange={handleCheck}
						defaultChecked={category === 'Price Descending'}
					/>
					<label
						htmlFor={category}
						className={clsx(
							'cursor-pointer p-2',
							checked === category && 'cursor-pointer bg-light p-2 rounded-lg text-textLight'
						)}>
						{category}
					</label>
				</Fragment>
			))}
		</Rows>
	)
}
