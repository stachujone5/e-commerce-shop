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
				className={checked === id ? 'cursor-pointer bg-light p-2 rounded-lg text-textLight' : 'cursor-pointer p-2'}>
				{id}
			</label>
		</>
	)
}
