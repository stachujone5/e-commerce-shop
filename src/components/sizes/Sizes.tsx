import { Fragment, useState } from 'react'
import { defaultCheckedSizes, SIZES } from '../../constants/constants'
import { isSizeType } from '../../helpers/helpers'

interface SizesProps {
	setSize: React.Dispatch<React.SetStateAction<number | null>>
}
export const Sizes = ({ setSize }: SizesProps) => {
	const [isChecked, setIsChecked] = useState(defaultCheckedSizes)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = e.target.id

		if (isSizeType(id)) {
			setIsChecked(prevState => {
				return { ...defaultCheckedSizes, [id]: !prevState[id]! }
			})
			setSize(parseInt(e.target.value))
		}
	}

	return (
		<div className='md:mb-5 lg:mb-20'>
			<p className='my-2 lg:text-xl lg:my-5'>Pick your size:</p>
			<div className='grid grid-cols-6 my-2 2xl:grid-cols-3'>
				{SIZES.map(size => (
					<Fragment key={size}>
						<input type='radio' className='hidden' name='size' value={size} id={size} onChange={handleCheck}></input>
						<label
							className={`border text-center p-2 hover:text-primary hover:bg-white transition-colors cursor-pointer ${
								isChecked[size] ? 'bg-white text-primary' : ''
							}`}
							htmlFor={size}>
							{size}
						</label>
					</Fragment>
				))}
			</div>
		</div>
	)
}
