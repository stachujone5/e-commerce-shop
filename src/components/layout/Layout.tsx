import { useState } from 'react'
import { Header } from '../../layouts/header/Header'
import { Aside } from '../../layouts/nav/Aside'

interface Props {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	return (
		<>
			<Header setIsNavOpen={setIsNavOpen} />
			<Aside isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			{children}
		</>
	)
}
