import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Redirect } from 'react-router'
import { ME_QUERY } from './dashboard'

const LOGOUT_MUTATION = gql`
	mutation Logout {
		logout
	}
`

const Logout = ({ history }) => {
	const [logout] = useMutation(LOGOUT_MUTATION, {
		refetchQueries: ['me'],
	})
	const { data } = useQuery(ME_QUERY)

	logout()
	return <Redirect to='/' />
}

export default Logout
