import { Fragment, useState } from 'react'
import { SIZES } from '../../constants/constants'
import { isSizeType } from '../../helpers/helpers'
import { AsideItem } from '../shared/aside_item/AsideItem'

interface Props {
	checkedValue: number | null
	setCheckedValue: React.Dispatch<React.SetStateAction<number | null>>
	category: string | undefined
}
export const Sizes = ({ checkedValue, setCheckedValue, category }: Props) => {
	const [isListOpen, setIsListOpen] = useState(false)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = parseInt(e.target.id)

		if (isSizeType(id)) {
			setCheckedValue(parseInt(e.target.value))
		}
	}

	const sizesRange = () => {
		if (category === 'kids') {
			return SIZES.slice(0, 12)
		}
		return SIZES.slice(-12)
	}

	return (
		<div className='md:mb-5 lg:mb-20'>
			<AsideItem title='Pick your size:'>
				<div className='grid grid-cols-6 2xl:grid-cols-3'>
					{sizesRange().map(size => (
						<Fragment key={size}>
							<input
								type='radio'
								className='hidden'
								name='size'
								value={size}
								id={size.toString()}
								onChange={handleCheck}
								checked={checkedValue === size}
							/>
							<label
								className={`cursor-pointer p-2 rounded-lg text-center ${
									checkedValue === size ? 'bg-light text-textLight' : ''
								}`}
								htmlFor={size.toString()}>
								{size}
							</label>
						</Fragment>
					))}
				</div>
			</AsideItem>
		</div>
	)
}
