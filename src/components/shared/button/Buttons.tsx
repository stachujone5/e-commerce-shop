interface Props {
	children: React.ReactNode
	onClick?: () => void
}

export const Button = ({ children, onClick }: Props) => {
	return (
		<button
			className='block ml-auto rounded-lg border py-2 px-6 border-secondary hover:text-secondary transition-colors duration-300'
			onClick={onClick}>
			{children}
		</button>
	)
}
