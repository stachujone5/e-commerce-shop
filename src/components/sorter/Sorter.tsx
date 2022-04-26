import { useContext, useEffect, useState } from 'react'
import { SORTING_CATEGORIES } from '../../constants/constants'
import { ProductsContext } from '../../contexts/ProductsProvider'
import { sort } from '../../helpers/sort'
import { AsideItem } from '../shared/aside_item/AsideItem'
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
		<AsideItem title='Sort By'>
			{SORTING_CATEGORIES.map(category => (
				<SorterInput key={category} checked={checked} setChecked={setChecked} id={category} label={category} />
			))}
		</AsideItem>
	)
}
