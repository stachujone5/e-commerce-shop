import { useState } from 'react'
import { Nav } from '../../layouts/nav/Nav'
import { Aside } from '../../layouts/aside/Aside'

interface Props {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	return (
		<>
			<Nav setIsNavOpen={setIsNavOpen} />
			<Aside isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			{children}
		</>
	)
}
