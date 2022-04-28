import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { HashRouter } from 'react-router-dom'
import { CartProvider } from './providers/CartProvider'
import { ProductsProvider } from './providers/ProductsProvider'
import { ColorProvider } from './providers/ColorProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<HashRouter>
			<ColorProvider>
				<ProductsProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductsProvider>
			</ColorProvider>
		</HashRouter>
	</React.StrictMode>
)
