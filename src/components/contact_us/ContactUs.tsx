import { useRef, useState } from 'react'

const emailRegex = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const ContactUs = () => {
	const [isSubmited, setIsSubmited] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (inputRef.current!.value.match(emailRegex)) {
			inputRef.current!.value = ''
			setIsSubmited(true)
			setTimeout(() => {
				setIsSubmited(false)
			}, 3000)
		}
	}
	return (
		<section>
			{isSubmited ? (
				<h2 className='text-center text-3xl text-green-600'>Thank you!</h2>
			) : (
				<h2 className='text-center text-3xl'>STAY UPDATED</h2>
			)}

			<p className='text-center my-5'>
				Subscribe to our newsletter for amazing <span className='border-b-2 border-red-600'>discounts</span> that we
				have prepared for you!
			</p>
			<div className='flex justify-center relative'>
				<form className='w-full max-w-screen-lg' onSubmit={handleForm}>
					<input
						type='email'
						id='email'
						ref={inputRef}
						className='w-full rounded-lg p-2 my-1 text-primary'
						placeholder='subscribe@logo.com'
					/>
					<button className='block ml-auto rounded-lg border p-2 my-3 hover:bg-white hover:text-primary transition-colors'>
						Subscribe
					</button>
				</form>
			</div>
		</section>
	)
}
