interface Props {
	id: string
	label: string
	checked: string | null
	setChecked: React.Dispatch<React.SetStateAction<string | null>>
}
export const SorterInput = ({ id, label, checked, setChecked }: Props) => {
	return (
		<>
			<input
				type='radio'
				id={id}
				className='hidden'
				name='sorting'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.id)}
			/>
			<label
				htmlFor={id}
				className={checked === id ? 'cursor-pointer bg-light p-2 rounded-lg text-textLight' : 'cursor-pointer p-2'}>
				{label}
			</label>
		</>
	)
}
