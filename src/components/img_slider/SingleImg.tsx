interface SingleImgProps {
	src: string
}

export const SingleImage = ({ src }: SingleImgProps) => {
	return (
		<div>
			<img src={src} alt='Product made by L O G O' />
		</div>
	)
}
