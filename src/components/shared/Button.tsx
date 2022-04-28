import clsx from 'clsx'

interface Props {
	children: React.ReactNode
	onClick?: () => void
	className?: string
}

export const Button = ({ children, onClick, className }: Props) => {
	return (
		<button
			className={clsx(
				'rounded-lg border py-2 px-6 border-secondary hover:text-secondary transition-colors duration-300',
				className && className
			)}
			onClick={onClick}>
			{children}
		</button>
	)
}
