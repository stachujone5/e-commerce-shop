import { useState } from 'react'
import { Nav } from '../nav/Nav'
import { Aside } from '../aside/Aside'
import { Footer } from '../footer/Footer'
import { Children } from '../../types/types'

export const Layout = ({ children }: Children) => {
	const [isAsideOpen, setIsAsideOpen] = useState(false)
	return (
		<>
			<Nav setIsAsideOpen={setIsAsideOpen} />
			<Aside isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
			{children}
			<Footer />
		</>
	)
}
