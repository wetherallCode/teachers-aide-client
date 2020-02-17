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
import { useQuery } from '@apollo/react-hooks'
import UserLogin from './Login'
import Logout from './Logout'
import UnitManager from './lesson-planner/UnitManager'
import LessonInfoScreen from './lesson-planner/LessonInfoScreen'
import { LessonCreator } from './lesson-planner/LessonCreator'
import LessonPlanCreator from './lesson-planner/lesson-creater/LessonPlanCreator'
import GradeBook from './grade-book/AssignmentGrader'

// import * as ApolloTypes from './__generated__/getAllStudents'
export const ME_QUERY = gql`
	query me {
		me {
			name
			_id
		}
		createLessonMode @client
	}
`

const DashBoardNavigation = ({ match }) => {
	const { data, loading, error } = useQuery(ME_QUERY)
	if (loading)
		return <h1 style={{ color: 'var(--blue)', textAlign: 'center' }}>Redirecting to Login</h1>
	if (error) console.error(error)

	const { me } = data
	// console.log(createLessonMode)

	return (
		<>
			{!me ? (
				<UserLogin />
			) : (
				<div id='test'>
					<header className='Header' style={{ borderBottom: '3px solid var(--white)' }}>
						<Link style={{ padding: '2%' }} to='/'>
							MrWetherall.org
						</Link>
						<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-end' }}>
							<Link style={{ margin: '1%' }} to={`${match.url}/roster-view/A_12`}>
								GradeBook
							</Link>
							<Link style={{ margin: '1%' }} to={`${match.url}/classroom/class-period-selector`}>
								Classroom
							</Link>
							<Link style={{ margin: '1%' }} to={`${match.url}/school-day/ClassManager/A_12`}>
								Courses
							</Link>
							<Link style={{ margin: '1%' }} to={`${match.url}/lesson-planner`}>
								Lessons
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

					<Route path={`${match.path}/school-day`} component={SchoolDay} />
					<Route exact path='/dashboard/roster-view/allStudent' component={AllStudentRoster} />
					<Route exact path='/dashboard/roster-profile/student/:studentInfo' component={Student} />
					<Route path='/dashboard/rosters/addNewStudent' component={StudentInfoLoader} />

					<Route path={`${match.path}/classroom/`} component={Classes} />
					<Route path={`${match.path}/lesson-planner/`} component={LessonPlanner} />

					<Route
						path={`${match.path}/lesson-planner/lesson-plan-creator`}
						component={LessonPlanCreator}
					/>
					{/* <Route path={`${match.path}/lesson-planner/`} component={LessonInfoScreen} /> */}

					{/* <div
						id='lessonPlanner'
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 4fr'
						}}>
						<Route path={`${match.path}/lesson-planner/:grade`} component={UnitManager} />

						<Route
							path={`${match.path}/lesson-planner/:grade/:lessonId`}
							component={LessonInfoScreen}
						/>
					</div> */}

					<Route path={`${match.path}/logout`} component={Logout} />
				</div>
			)}
		</>
	)
}

export default DashBoardNavigation
