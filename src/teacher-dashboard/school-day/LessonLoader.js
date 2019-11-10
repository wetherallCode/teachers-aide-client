import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'

const GET_PERIOD_NAMES = gql`
	query getLessonLoaderInfo {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
		gradeLevels: __type(name: "GradeLevelEnum") {
			enumValues {
				name
			}
		}
	}
`

const GET_UNIT_NAMES = gql`
	query findUnitNamesForLessonLoader($gradeLevel: GradeLevelEnum) {
		findUnitsByGrade(gradeLevel: $gradeLevel) {
			name
		}
	}
`

const GET_LESSONS_BY_UNIT = gql`
	query findLessonByUnit($inUnit: String) {
		findLessonsByUnit(inUnit: $inUnit) {
			lessonName
			_id
		}
	}
`

const CREATE_CLASS_PERIOD = gql`
	mutation createClassPeriod($input: ClassPeriodInput) {
		createClassPeriod(input: $input) {
			_id
			grade
			assignedLesson {
				_id
			}
			assignedDate
		}
	}
`

const LessonLoader = () => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <h2 style={{ paddingLeft: '2%', color: 'var(--blue)' }}>Loading</h2>
	if (error) console.log(error)

	return (
		<UnitLoaderDisplay
			periods={data.periodName.enumValues.map(period => period.name)}
			gradeLevels={data.gradeLevels.enumValues.map(grade => grade.name)}
		/>
	)
}

const UnitLoaderDisplay = ({ periods, gradeLevels }) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				gridTemplateRows: '1fr 1fr',
				height: '100vh'
			}}>
			<ClassLessonLoader period={periods[0]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[2]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[4]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[1]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[3]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[5]} gradeLevels={gradeLevels} />
		</div>
	)
}

const ClassLessonLoader = ({ period, gradeLevels }) => {
	const [gradeLevelSelect, setGradeLevelSelect] = useState(gradeLevels[0])
	const [unitNameSelect, setUnitNameSelect] = useState('')
	// const [lessonLoaderToggle, setLessonLoaderToggle] = useState(false)
	const [assignedDate, setAssignedDate] = useState(new Date().toLocaleString().substring(0, 10))

	const { data, loading, error } = useQuery(GET_UNIT_NAMES, {
		variables: { gradeLevel: gradeLevelSelect }
	})
	if (loading) return <h2 style={{ paddingLeft: '2%', color: 'var(--blue)' }}>Loading</h2>
	if (error) console.log(error)

	const { findUnitsByGrade } = data

	return (
		<div
			style={{
				border: '2px solid var(--blue)',
				margin: '1%',
				color: 'var(--blue)',
				height: '45vh',
				display: 'grid',
				gridTemplateRows: '1fr 2fr 1fr'
			}}>
			<div style={{ fontSize: '160%', textDecoration: 'underline', textAlign: 'center' }}>
				Class Period {period}
			</div>
			<div style={{ marginTop: '5%' }}>
				<div style={{ display: 'flex' }}>
					<div style={{ marginRight: '2%', marginLeft: '2%', fontSize: '140%' }}>Date: </div>
					<input
						type='date'
						style={{
							width: '100%',
							marginRight: '2%',
							height: '1.5rem',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '120%'
						}}
						onChange={e => {
							setAssignedDate(e.target.value)
							console.log('Date: ' + e.target.value)
						}}
					/>
				</div>
				{/* Grade Picker */}
				<div style={{ display: 'flex', marginTop: '5%' }}>
					<div style={{ marginRight: '2%', marginLeft: '2%', fontSize: '140%' }}>Grade: </div>
					<select
						style={{
							width: '100%',
							marginRight: '2%',
							height: '1.5rem',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '120%'
						}}
						onChange={e => setGradeLevelSelect(e.target.value)}>
						{gradeLevels.map(grade => (
							<option key={grade} value={grade}>
								{grade.toUpperCase()}
							</option>
						))}
					</select>
				</div>
				{/* Unit Picker */}
				<div style={{ display: 'flex', marginTop: '5%' }}>
					<div style={{ marginRight: '2%', marginLeft: '2%', fontSize: '140%' }}>Unit: </div>
					<select
						style={{
							width: '100%',
							marginRight: '2%',
							height: '1.5rem',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '120%'
						}}
						onChange={e => {
							setUnitNameSelect(e.target.value)
						}}>
						{findUnitsByGrade.map((unit, i) => (
							<option key={i} value={unit.name}>
								{unit.name}
							</option>
						))}
					</select>
					{/* <button
						type='button'
						onClick={e => {
							e.preventDefault()
							setLessonLoaderToggle(!lessonLoaderToggle)
						}}>
						Load Unit
					</button> */}
				</div>
				{/* Lesson Picker */}

				<LessonSelector
					unitName={unitNameSelect}
					assignedDate={assignedDate}
					grade={gradeLevelSelect}
					period={period}
				/>
			</div>
		</div>
	)
}

const LessonSelector = ({ unitName, assignedDate, grade, period }) => {
	const [assignedLesson, setAssignedLesson] = useState('')
	const [showSubmitCreateClassButton, setShowSubmitCreateClassButton] = useState(false)
	const [errorLog, setErrorLog] = useState(null)
	const { data, loading, error } = useQuery(GET_LESSONS_BY_UNIT, {
		variables: { inUnit: unitName }
	})
	const displayError = error => setErrorLog(error)
	console.log(errorLog)
	const [createClassPeriod] = useMutation(CREATE_CLASS_PERIOD, {
		onError: displayError,
		onCompleted: () => {
			setErrorLog(null)
			setAssignedLesson('')
		},
		refetchQueries: ['findClassPeriod']
	})

	if (loading) return null
	if (error) console.log(error)

	const { findLessonsByUnit } = data

	return (
		<div>
			<div style={{ display: 'flex', marginTop: '5%' }}>
				<div style={{ marginRight: '2%', marginLeft: '2%', fontSize: '140%' }}>Lesson: </div>
				<select
					style={{
						width: '100%',
						marginRight: '2%',
						height: '1.5rem',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '120%'
					}}
					onChange={e => {
						setAssignedLesson(e.target.value)
						setShowSubmitCreateClassButton(true)
					}}>
					{findLessonsByUnit.map(lesson => (
						<option key={lesson._id} value={lesson.lessonName}>
							{lesson.lessonName.toUpperCase()}
						</option>
					))}
				</select>
			</div>
			{/* {errorLog !== null && (
				<h6 style={{ color: 'var(--red)', margin: '0px' }}>Class already assigned</h6>
			)} */}
			<button
				type='button'
				style={
					errorLog === null
						? {
								fontSize: '140%',
								marginTop: '15%',
								height: '40px',
								width: '100%',
								textDecoration: 'none',
								color: 'var(--white)',
								backgroundColor: 'var(--blue)'
						  }
						: {
								fontSize: '140%',
								marginTop: '15%',
								height: '40px',
								width: '100%',
								textDecoration: 'none',
								color: 'var(--white)',
								backgroundColor: 'var(--red)'
						  }
				}
				onClick={() => {
					createClassPeriod({
						variables: {
							input: {
								assignedDate: assignedDate,
								grade: grade,
								assignedLesson: assignedLesson,
								period: period
							}
						}
					})
				}}>
				{errorLog !== null ? 'Class already assigned' : 'Create Class Period'}
			</button>
		</div>
	)
}

export default LessonLoader
