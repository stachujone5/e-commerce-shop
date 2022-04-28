export type CriteriaType = 'Price Ascending' | 'Price Descending' | 'Alphabetically (a-z)' | 'Alphabetically (z-a)'

export type BrandType = 'Nike' | 'Adidas' | 'New Balance' | 'Vans'

export type SizesType = 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48

export interface ProductInterface {
	id: number
	price: number
	description: string
	category: string
	brand: string
	shortBrand: BrandType
	images: string[]
}

export interface CartItemInterface {
	price: number
	size: number
	brand: string
	description: string
	id: number
	cartId: string
	images: string[]
}
