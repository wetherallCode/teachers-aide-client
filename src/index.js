import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import './index.css'
import App from './App'

import * as serviceWorker from './serviceWorker'

const defaultState = {
	isEditStudentMode: false,
	showHiddenStudents: false,
	removeStudentScreen: false,
	gradeBookToggle: false,
	isEditLessonMode: false,
	isEditLessonItemMode: false,
	removeLessonModal: false,
	userLogin: true,
}

const client = new ApolloClient({
	uri: `https://mrwetherall.herokuapp.com`,
	credentials: 'same-origin',
	clientState: {
		defaults: defaultState,
		resolvers: {},
	},
})

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register()
