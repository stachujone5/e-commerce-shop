import { useContext, Fragment } from 'react'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { Rows } from '../shared/Rows'
import { isCriteriaType } from '../../helpers/typeguards'
import { CRITERIAS } from '../../constants/constants'
import clsx from 'clsx'

export const Sorter = () => {
	const { sorting, setSorting } = useContext(ProductsContext)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isCriteriaType(e.target.id)) {
			setSorting(e.target.id)
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
							sorting === criteria && 'cursor-pointer bg-light p-2 rounded-lg text-textLight'
						)}>
						{criteria}
					</label>
				</Fragment>
			))}
		</Rows>
	)
}
