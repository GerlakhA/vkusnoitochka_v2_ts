import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RouterDom from './RouterDom.js'
import Header from './components/Header.js'
import { store } from './redux/store.js'
import { ChakraProvider } from '@chakra-ui/react'

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<Provider store={store}>
					<QueryClientProvider client={client}>
						<Header />
						<RouterDom />
					</QueryClientProvider>
				</Provider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
)
