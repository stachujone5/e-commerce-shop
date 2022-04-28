import { SizesType, BrandType, CategoryType } from '../types/types'
import { BRANDS, CATEGORIES, CRITERIAS } from '../constants/constants'
import { SIZES } from '../constants/constants'
import { CriteriaType } from '../types/types'

export const isSizeType = (size: number): size is SizesType => {
	return (SIZES as readonly number[]).includes(size)
}

export const isBrandType = (brand: string): brand is BrandType => {
	return (BRANDS as readonly string[]).includes(brand)
}

export const isCriteriaType = (criteria: string): criteria is CriteriaType => {
	return (CRITERIAS as readonly string[]).includes(criteria)
}

export const isCategoryType = (category: string): category is CategoryType => {
	return (CATEGORIES as readonly string[]).includes(category)
}
