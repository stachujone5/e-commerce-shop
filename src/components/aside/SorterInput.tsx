import clsx from 'clsx'

interface Props {
	id: string
	checked: string
	setChecked: React.Dispatch<React.SetStateAction<string>>
}
export const SorterInput = ({ id, checked, setChecked }: Props) => {
	return (
		<>
			<input
				type='radio'
				id={id}
				className='hidden'
				name='sorting'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.id)}
				defaultChecked={id === 'Price Descending'}
			/>
			<label
				htmlFor={id}
				className={clsx(
					'cursor-pointer p-2',
					checked === id && 'cursor-pointer bg-light p-2 rounded-lg text-textLight'
				)}>
				{id}
			</label>
		</>
	)
}
