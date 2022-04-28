import React, { useState } from 'react'
import { DEFAULT_COLOR } from '../constants/defaults'
import { ColorContext } from '../contexts/ColorContext'
import { Children } from '../types/types'

export const ColorProvider = ({ children }: Children) => {
	const [color, setColor] = useState(DEFAULT_COLOR)

	return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>
}
