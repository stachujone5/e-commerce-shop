import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { HashRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartProvider'
import { ProductsProvider } from './contexts/ProductsProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<HashRouter>
			<ProductsProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ProductsProvider>
		</HashRouter>
	</React.StrictMode>
)
