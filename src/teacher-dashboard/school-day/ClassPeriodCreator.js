import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { ClassPeriodContext } from './ClassPeriodContext'
import AssignmentLoaderDisplay from './AssignmentLoaderDisplay'
import AssignmentCreator from './AssignmentCreator'
import MultipleClassLoader from './MultipleClassLoader'
import TestLoader from './TestLoader'

const GET_GRADE_LEVELS = gql`
	query getClassPeriodInputs {
		gradeLevels: __type(name: "GradeLevelEnum") {
			enumValues {
				name
			}
		}
		MarkingPeriodEnum: __type(name: "MarkingPeriodEnum") {
			enumValues {
				name
			}
		}
	}
`

const GET_UNIT_NAMES = gql`
	query findUnitNamesForClassPeriodCreator($gradeLevel: GradeLevelEnum) {
		findUnitsByGrade(gradeLevel: $gradeLevel) {
			name
		}
	}
`

const GET_LESSONS_BY_UNIT = gql`
	query findLessonByUnitForClassPeriodCreator($inUnit: String) {
		findLessonsByUnit(inUnit: $inUnit) {
			_id
			lessonName

			workDue {
				readingPages
				readingSections
				type
			}
		}
	}
`

const GET_LESSON_BY_NAME = gql`
	query findLessonByName($name: String!) {
		findLessonByName(name: $name) {
			_id
			lessonName
			readings {
				pages
				sections
			}
			workDue {
				type
				readingPages
				readingSections
			}
		}
	}
`


export const useForm = initialValues => {
	const [values, setValues] = useState(initialValues)

	return [
		values,
		e => {
			return setValues({ ...values, [e.target.name]: e.target.value })
		}
	]
}

const ClassPeriodCreator = ({ period, date, allClassperiods }) => {
	const [lessonValues, setLessonValues] = useState({ grade: '', lessonName: '' })

	const [markingPeriodDefault, setMarkingPeriodDefault] = useState('')
	const [assignmentList, setAssignmentList] = useState([])
	const [mulitplePeriodSelect, setMulitplePeriodSelect] = useState([period])

	const [testValues, setTestValues] = useState({
		assignedDate: date,
		dueDate: '',
		markingPeriod: '',
		readingPages: '',
		readingSections: '',
		assignmentType: 'TEST',
		maxScore: 3
	})
	// useEffect(() => {
	// 	if (markingPeriods !== undefined) {
	// 		setMarkingPeriodDefault(markingPeriods[2])
	// 	}
	// })

	const { data, loading, error } = useQuery(GET_GRADE_LEVELS)
	if (loading) return <h2 style={{ paddingLeft: '2%', color: 'var(--blue)' }}>Loading</h2>
	if (error) console.log(error)

	const markingPeriods = data.MarkingPeriodEnum.enumValues.map(markingPeriod => markingPeriod.name)
	return (
		<>
			<UnitLoaderDisplay
				period={period}
				date={date}
				gradeLevels={data.gradeLevels.enumValues.map(grade => grade.name)}
				lessonValues={lessonValues}
				setLessonValues={setLessonValues}
			/>
			{lessonValues.lessonName && (
				<AssignmentLoader
					lessonValues={lessonValues}
					period={period}
					date={date}
					markingPeriods={markingPeriods}
					assignmentList={assignmentList}
					setAssignmentList={setAssignmentList}
					mulitplePeriodSelect={mulitplePeriodSelect}
					setMulitplePeriodSelect={setMulitplePeriodSelect}
					allClassperiods={allClassperiods}
					testValues={testValues}
					setTestValues={setTestValues}
				/>
			)}
			{lessonValues.lessonName && (
				<AssignmentCreator
					assignmentList={assignmentList}
					testValues={testValues}
					mulitplePeriodSelect={mulitplePeriodSelect}
					period={period}
					lessonValues={lessonValues}
					date={date}
					allClassperiods={allClassperiods}
				/>
			)}
		</>
	)
}

const UnitLoaderDisplay = ({ gradeLevels, date, period, lessonValues, setLessonValues }) => {
	const [gradeLevelSelect, setGradeLevelSelect] = useState(gradeLevels[0])

	const { data, loading, error } = useQuery(GET_UNIT_NAMES, {
		variables: { gradeLevel: gradeLevelSelect }
	})
	if (loading) return <h2 style={{ paddingLeft: '2%', color: 'var(--blue)' }}>Loading</h2>
	if (error) console.log(error)

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
				height: '6rem'
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex',
					alignItems: 'center',
					marginRight: '3%'
				}}>
				<div style={{ marginRight: '1%', color: 'var(--blue)' }}>Grade: </div>
				<select
					style={{
						height: '2rem',

						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '70%'
					}}
					onChange={e => setGradeLevelSelect(e.target.value)}>
					{gradeLevels.map(grade => (
						<option key={grade} value={grade}>
							{grade.toUpperCase()}
						</option>
					))}
				</select>
			</div>
			<ClassUnitLoader
				data={data}
				grade={gradeLevelSelect}
				date={date}
				period={period}
				lessonValues={lessonValues}
				setLessonValues={setLessonValues}
			/>
		</div>
	)
}

const ClassUnitLoader = ({ data, grade, date, period, lessonValues, setLessonValues }) => {
	const [unitNameSelect, setUnitNameSelect] = useState('')

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ marginRight: '1%', color: 'var(--blue)' }}>Unit: </div>
			<select
				style={{
					height: '2rem',
					marginRight: '3%',
					backgroundColor: 'transparent',
					color: 'var(--blue)',
					fontSize: '70%'
				}}
				onChange={e => {
					setUnitNameSelect(e.target.value)
				}}>
				{data.findUnitsByGrade.map((unit, i) => (
					<option
						key={i}
						value={unit.name}
						style={{
							width: '10%'
						}}>
						{unit.name}
					</option>
				))}
			</select>
			<ClassLessonLoader
				unit={unitNameSelect}
				grade={grade}
				date={date}
				period={period}
				lessonValues={lessonValues}
				setLessonValues={setLessonValues}
			/>
		</div>
	)
}

const ClassLessonLoader = ({ unit, grade, date, period, lessonValues, setLessonValues }) => {
	const [errorLog, setErrorLog] = useState(null)
	const { data, loading, error } = useQuery(GET_LESSONS_BY_UNIT, {
		variables: { inUnit: unit }
	})
	if (loading) return <div style={{ paddingLeft: '2%' }}>Loading</div>
	if (error) console.log(error)

	return (
		<ClassLessonLoaderDisplay
			data={data}
			error={errorLog}
			grade={grade}
			date={date}
			period={period}
			lessonValues={lessonValues}
			setLessonValues={setLessonValues}
		/>
	)
}

const ClassLessonLoaderDisplay = ({
	data,
	error,
	grade,
	date,
	period,
	lessonValues,
	setLessonValues
}) => {
	useEffect(() => {
		if (data.findLessonsByUnit.length > 0) {
			setLessonValues({
				grade: grade,
				lessonName: data.findLessonsByUnit[0].lessonName
			})
		}
	}, [setLessonValues])
	return (
		<>
			<div style={{ display: 'flex' }}>
				<div style={{ marginRight: '1%', color: 'var(--blue)' }}>Lesson: </div>
				{data.findLessonsByUnit.length > 0 ? (
					<select
						style={{
							fontSize: '70%',
							height: '2rem',
							backgroundColor: 'var(--white)',
							color: 'var(--blue)'
						}}
						onChange={e => {
							return setLessonValues({
								grade: grade,
								lessonName: e.target.value
							})
						}}>
						{data.findLessonsByUnit.map(lesson => {
							return (
								<option key={lesson._id} value={lesson.lessonName}>
									{lesson.lessonName.length < 30
										? lesson.lessonName.toUpperCase()
										: lesson.lessonName.toUpperCase().substring(0, 30) + '...'}
								</option>
							)
						})}
					</select>
				) : (
					<select
						style={{
							fontSize: '70%',
							width: '20rem',
							height: '2rem',
							backgroundColor: 'var(--white)',
							color: 'var(--blue)'
						}}
					/>
				)}
			</div>
		</>
	)
}

const AssignmentLoader = ({
	assignmentList,
	setAssignmentList,
	lessonValues,
	period,
	date,
	mulitplePeriodSelect,
	setMulitplePeriodSelect,
	allClassperiods,
	markingPeriods,
	testValues,
	setTestValues
}) => {
	const { grade, lessonName } = lessonValues
	const { data, loading, error } = useQuery(GET_LESSON_BY_NAME, { variables: { name: lessonName } })

	if (loading) return null
	if (error) console.log(error)

	const markingPeriodDefault = markingPeriods[1]
	console.log(markingPeriodDefault)
	return (
		<div
			style={{
				backgroundColor: 'var(--white)',
				color: 'var(--blue)',
				display: 'grid',
				gridTemplateRows: '7fr 2fr'
			}}>
			<AssignmentLoaderDisplay
				data={data}
				date={date}
				markingPeriods={markingPeriods}
				markingPeriodDefault={markingPeriodDefault}
				lessonValues={lessonValues}
				assignmentList={assignmentList}
				setAssignmentList={setAssignmentList}
				mulitplePeriodSelect={mulitplePeriodSelect}
				setMulitplePeriodSelect={setMulitplePeriodSelect}
			/>
			<TestLoader
				testValues={testValues}
				setTestValues={setTestValues}
				date={date}
				data={data}
				markingPeriods={markingPeriods}
				markingPeriodDefault={markingPeriodDefault}
			/>
			<MultipleClassLoader
				data={data}
				date={date}
				lessonValues={lessonValues}
				assignmentList={assignmentList}
				setAssignmentList={setAssignmentList}
				mulitplePeriodSelect={mulitplePeriodSelect}
				setMulitplePeriodSelect={setMulitplePeriodSelect}
				allClassperiods={allClassperiods}
				period={period}
			/>
		</div>
	)
}

export default ClassPeriodCreator
