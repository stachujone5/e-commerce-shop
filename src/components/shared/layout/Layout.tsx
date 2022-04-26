import { useState } from 'react'
import { Nav } from '../../../layouts/nav/Nav'
import { Aside } from '../../../layouts/aside/Aside'

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
