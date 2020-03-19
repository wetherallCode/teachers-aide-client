import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache, HttpLink, ApolloLink, ApolloClient, split } from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
// import ApolloClient from 'apollo-boost'

import './index.css'
import App from './App'

// import * as serviceWorker from './serviceWorker'

const defaultState = {
	isEditStudentMode: false,
	showHiddenStudents: false,
	removeStudentScreen: false,
	gradeBookToggle: false,
	isEditLessonMode: false,
	isEditLessonItemMode: false,
	removeLessonModal: false,
	userLogin: true,
	createLessonMode: false,
	addUnitMode: false,
	studentAssignmentToggle: false
}
const httpLink = new HttpLink({
	uri: 'https://mrwetherall.herokuapp.com/graphql',
	credentials: 'include'
})
const wsLink = new WebSocketLink({
	uri: 'wss://mrwetherall.herokuapp.com/graphql ',
	options: { reconnect: true }
})
const terminatingLink = split(
	({ query }) => {
		const { kind, operation } = getMainDefinition(query)
		return kind === 'OperationDefinition' && operation === 'subscription'
	},
	wsLink,
	httpLink
)

const link = ApolloLink.from([terminatingLink])

const cache = new InMemoryCache()

const client = new ApolloClient({
	// uri: `https://mrwetherall.org/graphql`,
	// credentials: 'same-origin',

	// uri: 'https://mrwetherall.herokuapp.com/graphql',
	// uri: 'http://localhost:4000/graphql',
	// credentials: 'include',
	link,
	cache
	// clientState: {
	// 	defaults: defaultState,
	// 	resolvers: {}
	// }
})

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register()

// uri: `https://mrwetherall.herokuapp.com/graphql`,
