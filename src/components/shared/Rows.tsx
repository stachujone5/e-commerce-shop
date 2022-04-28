import { Children } from '../../types/types'

interface Props extends Children {
	title: string
}

export const Rows = ({ children, title }: Props) => {
	return (
		<div>
			<p className='text-center bg-light rounded-lg p-2 text-textLight'>{title}</p>
			<div className='border-l-2 border-light p-3 mt-2 flex flex-col gap-2'>{children}</div>
		</div>
	)
}
