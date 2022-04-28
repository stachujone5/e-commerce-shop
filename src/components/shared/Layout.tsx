import { useState } from 'react'
import { Nav } from '../nav/Nav'
import { Aside } from '../aside/Aside'

interface Props {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	const [isAsideOpen, setIsAsideOpen] = useState(false)
	return (
		<>
			<Nav setIsAsideOpen={setIsAsideOpen} />
			<Aside isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
			{children}
		</>
	)
}
