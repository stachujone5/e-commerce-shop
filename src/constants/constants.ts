import { GiConverseShoe } from 'react-icons/gi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const SIZES: sizesType[] = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
export type sizesType = 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46

export const defaultCheckedBrands = { Nike: false, Adidas: false, 'New Balance': false, Vans: false }

export type BrandInterface = 'Nike' | 'Adidas' | 'New Balance' | 'Vans'

export const BRANDS: BrandInterface[] = ['Nike', 'Adidas', 'New Balance', 'Vans']

export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const MENU_ITEMS = [
	{ link: 'shop', path: '/', icon: GiConverseShoe },
	{ link: 'gallery', path: '/#gallery', icon: HiOutlinePhotograph },
	{ link: 'contact', path: '#contact', icon: FiMail },
	{ link: 'cart', path: '/cart', icon: AiOutlineShoppingCart },
]
