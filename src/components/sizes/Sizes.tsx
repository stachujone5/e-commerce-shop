import { Fragment } from 'react'
import { SIZES } from '../../constants/constants'
import { isSizeType } from '../../helpers/helpers'

interface SizesProps {
	checkedValue: number | null
	setCheckedValue: React.Dispatch<React.SetStateAction<number | null>>
}
export const Sizes = ({ checkedValue, setCheckedValue }: SizesProps) => {
	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = parseInt(e.target.id)

		if (isSizeType(id)) {
			setCheckedValue(parseInt(e.target.value))
		}
	}

	return (
		<div className='md:mb-5 lg:mb-20'>
			<p className='my-2 lg:text-xl lg:my-5'>Pick your size:</p>
			<div className='grid grid-cols-6 my-2 2xl:grid-cols-3'>
				{SIZES.map(size => (
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
							className={`border text-center p-2 hover:text-primary hover:bg-white transition-colors cursor-pointer ${
								checkedValue === size ? 'bg-white text-primary' : ''
							}`}
							htmlFor={size.toString()}>
							{size}
						</label>
					</Fragment>
				))}
			</div>
		</div>
	)
}
