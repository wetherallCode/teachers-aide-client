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
	query findUnitNames($gradeLevel: GradeLevelEnum) {
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
			style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
			<ClassLessonLoader period={periods[0]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[1]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[2]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[3]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[4]} gradeLevels={gradeLevels} />
			<ClassLessonLoader period={periods[5]} gradeLevels={gradeLevels} />
		</div>
	)
}

const ClassLessonLoader = ({ period, gradeLevels }) => {
	const [gradeLevelSelect, setGradeLevelSelect] = useState(gradeLevels[0])
	const [unitNameSelect, setUnitNameSelect] = useState('')
	const [lessonLoaderToggle, setLessonLoaderToggle] = useState(false)
	const [assignedDate, setAssignedDate] = useState(new Date().toISOString().substring(0, 10))

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
				height: '45vh'
			}}>
			<div style={{ fontSize: '160%' }}>Class Period</div>
			{/* <form
				onSubmit={e => {
					e.preventDefault()
				}}> */}
			<div style={{ display: 'flex' }}>
				<div style={{ paddingRight: '2%', fontSize: '140%' }}>Date: </div>
				<input
					type='date'
					style={{
						width: '15rem',
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
			<div style={{ display: 'flex' }}>
				<div style={{ paddingRight: '2%', fontSize: '140%' }}>Grade: </div>
				<select
					style={{
						width: '15rem',
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
			<div style={{ display: 'flex' }}>
				<div style={{ paddingRight: '2%', fontSize: '140%' }}>Unit: </div>
				<select
					style={{
						width: '15rem',
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
				<button
					type='button'
					onClick={e => {
						e.preventDefault()
						setLessonLoaderToggle(!lessonLoaderToggle)
					}}>
					Load Unit
				</button>
			</div>
			{/* Lesson Picker */}
			{lessonLoaderToggle && (
				<LessonSelector
					unitName={unitNameSelect}
					assignedDate={assignedDate}
					grade={gradeLevelSelect}
					period={period}
				/>
			)}
			{/* </form> */}
		</div>
	)
}

const LessonSelector = ({ unitName, assignedDate, grade, period }) => {
	const [assignedLesson, setAssignedLesson] = useState('')
	const [showSubmitCreateClassButton, setShowSubmitCreateClassButton] = useState(false)
	const { data, loading, error } = useQuery(GET_LESSONS_BY_UNIT, {
		variables: { inUnit: unitName }
	})
	const [createClassPeriod] = useMutation(CREATE_CLASS_PERIOD)

	if (loading) return null
	if (error) console.log(error)

	const { findLessonsByUnit } = data

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ paddingRight: '2%', fontSize: '140%' }}>Lesson: </div>
			<select
				style={{
					width: '15rem',
					height: '1.5rem',
					backgroundColor: 'transparent',
					color: 'var(--blue)',
					fontSize: '120%'
				}}
				onChange={e => {
					setAssignedLesson(e.target.value)
					setShowSubmitCreateClassButton(!showSubmitCreateClassButton)
				}}>
				{findLessonsByUnit.map(lesson => (
					<option key={lesson._id} value={lesson.lessonName}>
						{lesson.lessonName.toUpperCase()}
					</option>
				))}
			</select>
			<>
				{showSubmitCreateClassButton && (
					<button
						type='button'
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
							setAssignedLesson('')
						}}>
						Create Class Period
					</button>
				)}
			</>
		</div>
	)
}

export default LessonLoader