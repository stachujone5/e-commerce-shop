import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { HashRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<HashRouter>
			<CartProvider>
				<App />
			</CartProvider>
		</HashRouter>
	</React.StrictMode>
)
