import { brandInterface, defaultCheckedBrands, SIZES, sizesType } from '../constants/constants'

export const isSizeType = (id: string): id is sizesType => {
	return (SIZES as readonly string[]).includes(id)
}

export const isBrandType = (id: string): id is brandInterface => {
	return (Object.keys(defaultCheckedBrands) as readonly string[]).includes(id)
}
