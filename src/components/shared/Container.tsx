import { Children } from '../../types/types'

export const Container = ({ children }: Children) => {
	return <div className='w-4/5 container mx-auto py-10 bg-primary'>{children}</div>
}
