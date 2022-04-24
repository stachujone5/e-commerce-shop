import { useRef, useState } from 'react'
import { EMAIL_REGEX } from '../../constants/constants'

export const ContactUs = () => {
	const [isSubmited, setIsSubmited] = useState(false)
	const [isError, setIsError] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (inputRef.current!.value.match(EMAIL_REGEX) && textareaRef.current?.value) {
			inputRef.current!.value = ''
			setIsSubmited(true)
			setTimeout(() => {
				setIsSubmited(false)
			}, 3000)
		} else {
			setIsError(true)
			setTimeout(() => {
				setIsError(false)
			}, 3000)
		}
	}
	return (
		<section id='#contact'>
			{isSubmited ? (
				<h2 className='text-center text-3xl text-green-600 transition-colors'>Thank you!</h2>
			) : (
				<h2 className='text-center text-3xl'>STAY UPDATED</h2>
			)}

			<p className='text-center my-5'>
				Do you have any questions? Fell free to {}
				<span className='border-b-2 border-secondary transition-colors duration-500'>contact</span> us!
			</p>
			<div className='flex justify-center relative'>
				<form className='w-full max-w-screen-lg' onSubmit={handleForm}>
					<input
						type='email'
						id='email'
						ref={inputRef}
						className='w-full rounded-lg p-2 my-1 text-primary border-2'
						style={{ borderColor: isError ? 'rgb(220 38 38)' : '#fff' }}
						placeholder='subscribe@logo.com'
					/>
					<textarea
						ref={textareaRef}
						cols={30}
						rows={10}
						className='text-black w-full rounded-lg my-6 p-2 border-2'
						style={{ borderColor: isError ? 'rgb(220 38 38)' : '#fff' }}
						placeholder='Send us a message!'
					/>
					<button className='block ml-auto rounded-lg border py-2 px-6 my-3 border-secondary hover:text-secondary transition-colors duration-300'>
						Send
					</button>
				</form>
			</div>
		</section>
	)
}
