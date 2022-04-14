interface ContainerProps {
	children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
	return <div className='container mx-auto py-10 bg-primary'>{children}</div>
}
