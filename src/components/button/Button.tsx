interface ButtonProps {
	icon: React.ReactNode
	className?: string
	onClick?: () => void
}

export const Button = ({ icon, className, onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={`${className ? className : ''} text-3xl text-black`}>
			{icon}
		</button>
	)
}
