import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { Redirect } from 'react-router'

const LOGOUT_MUTATION = gql`
	mutation Logout {
		logout
	}
`

const Logout = ({ history }) => {
	const [logout] = useMutation(LOGOUT_MUTATION, {
		refetchQueries: ['me']
	})

	logout()
	return <Redirect to='/' />
}

export default Logout
