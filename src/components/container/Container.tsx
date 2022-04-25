interface Props {
	children: React.ReactNode
}

export const Container = ({ children }: Props) => {
	return <div className='w-4/5 container mx-auto py-10 bg-primary'>{children}</div>
}
