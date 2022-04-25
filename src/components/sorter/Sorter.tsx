import { useContext, useEffect, useState } from 'react'
import { SORTING_CATEGORIES } from '../../constants/constants'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { sort } from '../../helpers/sort'
import { SorterInput } from '../sorter_input/SorterInput'

export const Sorter = () => {
	const [checked, setChecked] = useState<string | null>(null)
	const { tempProducts, setTempProducts } = useContext(ProductsContext)

	useEffect(() => {
		if (checked) {
			const sortedProducts = sort(checked, tempProducts)
			console.log(sortedProducts)
			setTempProducts([...sortedProducts])
		}
	}, [checked, tempProducts, setTempProducts])

	return (
		<div className='my-10'>
			<p className='text-center bg-navLight rounded-lg p-2 text-navTextLight'>Sort By</p>
			<div className='border-l-2 border-navLight p-3 mt-2 flex flex-col gap-2'>
				{SORTING_CATEGORIES.map(category => (
					<SorterInput key={category} checked={checked} setChecked={setChecked} id={category} label={category} />
				))}
			</div>
		</div>
	)
}
