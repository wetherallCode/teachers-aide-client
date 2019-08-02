import React from 'react'
import { Link, Route } from 'react-router-dom'
import RosterNavBar from './roster-components/rosterNavigation'
import Rosters from './roster-components/rosterView'
import AllStudentRoster from './roster-components/AllStudentRoster'
import Student from './roster-components/Student'
import { StudentInfoLoader } from './roster-components/StudentAdder'
import Classes from './class-tool-components/Classes'
import SchoolDay from './school-day/SchoolDay'
import LessonPlanner from './lesson-planner/LessonPlanner'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import UserLogin from './UserLogin'
import Logout from './Logout'
// import * as ApolloTypes from './__generated__/getAllStudents'
export const ME_QUERY = gql`
	query me {
		me {
			name
			_id
		}
	}
`

const LOGOUT_MUTATION = gql`
	mutation Logout {
		logout
	}
`

const DashBoardNavigation = ({ match }) => {
	const [logout] = useMutation(LOGOUT_MUTATION)
	const { data, loading } = useQuery(ME_QUERY)
	if (loading)
		return <h1 style={{ color: 'var(--blue)', textAlign: 'center' }}>Redirecting to Login</h1>
	console.log(data.me)
	const { me } = data

	return (
		<>
			{!me ? (
				<UserLogin />
			) : (
				<div>
					<header className='Header' style={{ borderBottom: '3px solid var(--white)' }}>
						<Link style={{ padding: '2%' }} to='/'>
							MrWetherall.org
						</Link>
						<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-end' }}>
							<Link style={{ margin: '1%' }} to={`${match.url}/roster-view`}>
								Rosters
							</Link>
							<Link style={{ margin: '1%' }} to={`${match.url}/classroom/class-period-selector`}>
								Class
							</Link>
							<Link style={{ margin: '1%' }} to={`${match.url}/lesson-planner/`}>
								Lesson Planner
							</Link>
							<Link style={{ margin: '1%' }} to={`${match.url}/school-day`}>
								School Day
							</Link>
							<Link style={{ margin: '1%' }} to={`${match.url}/logout`}>
								Logout
							</Link>
						</div>
					</header>

					<div id='test' style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
						<Route path={`${match.path}/roster-view/`} component={RosterNavBar} />
						<Route path={`${match.path}/roster-view/:periodName`} component={Rosters} />
					</div>

					<Route exact path='/dashboard/roster-view/allStudent' component={AllStudentRoster} />
					<Route exact path='/dashboard/roster-profile/student/:studentInfo' component={Student} />
					<Route path='/dashboard/rosters/addNewStudent' component={StudentInfoLoader} />

					<Route path={`${match.path}/classroom/`} component={Classes} />
					<Route path={`${match.path}/lesson-planner/`} component={LessonPlanner} />

					<Route path={`${match.path}/school-day`} component={SchoolDay} />
					<Route path={`${match.path}/logout`} component={logout} />
				</div>
			)}
		</>
	)
}

export default DashBoardNavigation
