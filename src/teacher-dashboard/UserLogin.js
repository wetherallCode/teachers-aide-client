import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import Modal from 'react-modal'
import { gql } from 'apollo-boost'
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks'

const USER_LOGIN_MODAL_TOGGLE = gql`
	query userLoginModalToggle {
		userLogin @client
	}
`

const LOGIN_MUTATION = gql`
	mutation Login($name: String!, $password: String!) {
		login(name: $name, password: $password) {
			_id
			name
		}
	}
`

const UserLogin = ({ history }) => {
	const [loginName, setLoginName] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [errorLog, setErrorLog] = useState(null)
	console.log(errorLog)
	const { data } = useQuery(USER_LOGIN_MODAL_TOGGLE)

	const displayError = error => setErrorLog(error)

	const [login] = useMutation(LOGIN_MUTATION, {
		variables: { name: loginName, password: loginPassword },
		refetchQueries: ['me'],
		onError: displayError
	})

	const client = useApolloClient()
	const { userLogin } = data

	const userLoginModalToggle = () => {
		client.writeData({ data: { userLogin: !userLogin } })
	}
	console.log('login screen')
	return (
		<Modal
			style={{
				overlay: {
					backgroundColor: 'var(--darkGrey)'
				},
				content: {
					marginLeft: '20%',
					width: '40rem',
					height: '25rem'
				}
			}}
			isOpen={userLogin}
			onRequestClose={() => userLoginModalToggle()}>
			<div style={{ display: 'grid', gridTemplateRows: '1fr 3fr' }}>
				<div>
					<h1 style={{ color: 'var(--blue)', textAlign: 'center' }}>Teacher Login</h1>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: '0px'
					}}>
					{errorLog !== null && (
						<h6 style={{ color: 'var(--red)', margin: '0px' }}>Wrong UserName/Password</h6>
					)}
					<input
						style={{
							height: '1.5rem',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '120%',
							width: '20rem',
							marginBottom: '4%'
						}}
						type='text'
						name='loginName'
						placeholder='Username'
						autoComplete='new-password'
						value={loginName}
						onChange={e => setLoginName(e.target.value)}
					/>
					<input
						style={{
							height: '1.5rem',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '120%',
							width: '20rem',
							marginBottom: '4%'
						}}
						type='password'
						name='loginPassword'
						placeholder='Password'
						autoComplete='new-password'
						value={loginPassword}
						onChange={e => setLoginPassword(e.target.value)}
					/>

					<button
						type='submit'
						className='blueButton'
						style={{ width: '20.45rem', fontSize: '140%', marginBottom: '4%' }}
						onClick={() => {
							console.log('click')
							login()
							return history.push('/dashboard')
						}}>
						Login
					</button>

					<button
						type='submit'
						className='redButton'
						style={{ width: '20.45rem', fontSize: '140%' }}
						onClick={() => {
							login()
							return history.push('/')
						}}>
						Go Back
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default withRouter(UserLogin)
