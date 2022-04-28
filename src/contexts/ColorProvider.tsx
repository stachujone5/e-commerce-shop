import React, { createContext, useState } from 'react'
import { DEFAULT_COLOR } from '../constants/defaults'

interface ColorContextDefaultValue {
	color: string
	setColor: React.Dispatch<React.SetStateAction<string>>
}
export const ColorContext = createContext<ColorContextDefaultValue>({ color: DEFAULT_COLOR, setColor: () => {} })

interface Props {
	children: React.ReactNode
}

export const ColorProvider = ({ children }: Props) => {
	const [color, setColor] = useState(DEFAULT_COLOR)

	return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>
}
