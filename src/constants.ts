export const SIZES: sizesType[] = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
export type sizesType = '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46'

export const defaultCheckedSizes = {
	35: false,
	36: false,
	37: false,
	38: false,
	39: false,
	40: false,
	41: false,
	42: false,
	43: false,
	44: false,
	45: false,
	46: false,
}

export const defaultCheckedBrands = { Nike: true, Adidas: true, 'New Balance': true, Vans: true }

export type brandInterface = 'Nike' | 'Adidas' | 'New Balance' | 'Vans'
