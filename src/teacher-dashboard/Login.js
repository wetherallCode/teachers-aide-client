import React, { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import Modal from 'react-responsive-modal'
import { gql } from 'apollo-boost'
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks'

// const USER_LOGIN_MODAL_TOGGLE = gql`
// 	query userLoginModalToggle {

// 	}
// `

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
	const [userLogin, setUserLogin] = useState(true)

	const [errorLog, setErrorLog] = useState(null)

	// const { data } = useQuery(USER_LOGIN_MODAL_TOGGLE)

	const displayError = error => setErrorLog(error)

	const [login] = useMutation(LOGIN_MUTATION, {
		variables: { name: loginName, password: loginPassword },
		refetchQueries: ['me'],
		onError: displayError
	})

	const client = useApolloClient()

	const userLoginModalToggle = () => {
		setUserLogin(!userLogin)
	}

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
			open={userLogin}
			onClose={() => userLoginModalToggle()}>
			<form
				onSubmit={e => e.preventDefault()}
				style={{ display: 'grid', gridTemplateRows: '1fr 3fr' }}>
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
							return <Redirect to='/dashboard' />
						}}>
						Login
					</button>

					<button
						type='submit'
						className='redButton'
						style={{ width: '20.45rem', fontSize: '140%' }}
						onClick={() => {
							console.log('click')
							const goBack = () => {
								return history.push(`/`)
							}
							goBack()
						}}>
						Go Back
					</button>
				</div>
			</form>
		</Modal>
	)
}

export default withRouter(UserLogin)
