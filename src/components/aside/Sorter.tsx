import { useContext, useEffect, useState, Fragment } from 'react'
import { CRITERIAS } from '../../constants/constants'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { sort } from '../../helpers/sort'
import { Rows } from '../shared/Rows'
import { isCriteriaType } from '../../helpers/typeguards'
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
			{CRITERIAS.map(criteria => (
				<Fragment key={criteria}>
					<input
						type='radio'
						id={criteria}
						className='hidden'
						name='sorting'
						onChange={handleCheck}
						defaultChecked={criteria === 'Price Descending'}
					/>
					<label
						htmlFor={criteria}
						className={clsx(
							'cursor-pointer p-2',
							checked === criteria && 'cursor-pointer bg-light p-2 rounded-lg text-textLight'
						)}>
						{criteria}
					</label>
				</Fragment>
			))}
		</Rows>
	)
}
