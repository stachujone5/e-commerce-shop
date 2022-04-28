import { Button } from '../shared/Buttons'

export const Pagination = () => {
	return (
		<div className='mx-auto w-fit my-10 flex gap-2 md:gap-4'>
			<Button>Prev</Button>
			<Button>Next</Button>
		</div>
	)
}
