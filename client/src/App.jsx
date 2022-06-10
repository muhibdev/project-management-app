import React from 'react';
import Header from './components/Header';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

const cache = new InMemoryCache({
	typePolicy: {
		Query: {
			fields: {
				clients: {
					merge(existiong, incomming) {
						return incomming;
					},
				},
				projects: {
					merge(existiong, incomming) {
						return incomming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: cache,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects/:id' element={<Project />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</ApolloProvider>
	);
};

export default App;
