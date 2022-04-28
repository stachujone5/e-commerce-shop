import React, { createContext, useState } from 'react'

interface ColorContextDefaultValue {
	color: string
	setColor: React.Dispatch<React.SetStateAction<string>>
}
export const ColorContext = createContext<ColorContextDefaultValue>({ color: '#ff9800', setColor: () => {} })

interface Props {
	children: React.ReactNode
}

export const ColorProvider = ({ children }: Props) => {
	const [color, setColor] = useState('#ff9800')

	return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>
}
