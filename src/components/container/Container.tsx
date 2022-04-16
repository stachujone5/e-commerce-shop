interface ContainerProps {
	children: React.ReactNode
	classList?: string
}

export const Container = ({ children, classList }: ContainerProps) => {
	return <div className='w-4/5 container mx-auto py-10 bg-primary'>{children}</div>
}
