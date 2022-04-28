import { createContext } from 'react'
import { DEFAULT_COLOR } from '../constants/defaults'

interface ColorContextDefaultValue {
	color: string
	setColor: React.Dispatch<React.SetStateAction<string>>
}

export const ColorContext = createContext<ColorContextDefaultValue>({ color: DEFAULT_COLOR, setColor: () => {} })
