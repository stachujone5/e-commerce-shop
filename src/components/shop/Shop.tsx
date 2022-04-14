import { useEffect, useState } from 'react'

interface productInterface {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: {
		rate: number
		count: number
	}
}

const url = 'https://fakestoreapi.com/products'

export const Shop = () => {
	const [products, setProducts] = useState<productInterface[]>()
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const fetchProducts = async (url: string) => {
		try {
			setIsError(false)
			setIsLoading(true)
			const res = await fetch(url)
			const data = await res.json()
			setProducts(data)
			setIsLoading(false)
		} catch (err) {
			setIsError(true)
			setIsLoading(false)
			console.log(err)
		}
	}

	useEffect(() => {
		fetchProducts(url).catch(err => {
			setIsError(true)
			console.log(err)
		})
	}, [])

	if (isLoading) {
		return <h2>Loading...</h2>
	}

	if (isError) {
		return <h2>Something went wrong!</h2>
	}

	if (products) {
		return <div>{products.map((product: productInterface) => product.id)}</div>
	}
	return null
}
