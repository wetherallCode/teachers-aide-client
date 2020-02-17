export const CURRENT_MARKING_PERIOD_ID = '5e372ba155b0ff0024103d15'

export const CurrentGradeCalculator = ({ student, markingPeriod, todaysDate }) => {
	const testTotalScoredPoints = student.hasTests
		.filter(test => test.markingPeriod === markingPeriod)
		.map(test => test.score)
		.reduce((acummulator, currentValue) => acummulator + currentValue)
	const testTotalMaxScorePoints = student.hasTests
		.filter(test => test.markingPeriod === markingPeriod && test.dueDate <= todaysDate)
		.map(test => test.maxScore)
		.reduce((acummulator, currentValue) => acummulator + currentValue)
	// const lastScoreOmitted = student.hasTests.filter(test => test.markingPeriod === markingPeriod).map(test=>test.maxScore)
	const testGrade = parseFloat(
		((testTotalScoredPoints / testTotalMaxScorePoints).toFixed(2) * 35).toFixed(2),
		10
	)

	const openEndedTotalScoredPoints = student.hasAssignments
		.filter(
			oeq =>
				oeq.assignmentType === 'OEQ' && oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod
		)
		.map(oeq => oeq.score)
		.reduce((acummulator, currentValue) => acummulator + currentValue)
	const openEndedTotalMaxScorePoints = student.hasAssignments
		.filter(
			oeq => oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod && oeq.dueDate <= todaysDate
		)
		.map(oeq => oeq.maxScore)
		.reduce((acummulator, currentValue) => acummulator + currentValue)
	const openEndedGrade = parseFloat(
		((openEndedTotalScoredPoints / openEndedTotalMaxScorePoints).toFixed(2) * 50).toFixed(2)
	)
	const responsibilityPointsGrade = parseFloat((student.responsibilityPoints * 0.15).toFixed(2))

	const grade = Math.round(responsibilityPointsGrade + openEndedGrade + testGrade)

	return grade
}

export const testTotalScoredPoints = ({ student, markingPeriod }) => {
	console.log(student, markingPeriod)
	const points = student.hasTests
		.filter(test => test.markingPeriod === markingPeriod)
		.map(test => test.score)
		.reduce((acummulator, currentValue) => acummulator + currentValue)
	return points
}

export const testTotalMaxScorePoints = ({ student, markingPeriod, todaysDate }) => {
	const totalPoints = student.hasTests
		.filter(test => test.markingPeriod === markingPeriod && test.dueDate <= todaysDate)
		.map(test => test.maxScore)
		.reduce((acummulator, currentValue) => acummulator + currentValue)
	return totalPoints
}

export const openEndedTotalScoredPoints = ({ student, markingPeriod }) =>
	student.hasAssignments
		.filter(
			oeq =>
				oeq.assignmentType === 'OEQ' && oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod
		)
		.map(oeq => oeq.score)
		.reduce((acummulator, currentValue) => acummulator + currentValue)

export const openEndedTotalMaxScorePoints = ({ student, markingPeriod, todaysDate }) =>
	student.hasAssignments
		.filter(
			oeq => oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod && oeq.dueDate <= todaysDate
		)
		.map(oeq => oeq.maxScore)
		.reduce((acummulator, currentValue) => acummulator + currentValue)

// export const getTestGrade = ({ student, markingPeriod, todaysDate }) => {
// 	const testTotalScoredPoints = student.hasTests
// 		.filter(test => test.markingPeriod === markingPeriod)
// 		.map(test => test.score)
// 		.reduce((acummulator, currentValue) => acummulator + currentValue)
// 	const testTotalMaxScorePoints = student.hasTests
// 		.filter(test => test.markingPeriod === markingPeriod && test.dueDate <= todaysDate)
// 		.map(test => test.maxScore)
// 		.reduce((acummulator, currentValue) => acummulator + currentValue)
// 	// const lastScoreOmitted = student.hasTests.filter(test => test.markingPeriod === markingPeriod).map(test=>test.maxScore)
// 	const testGrade = parseFloat(
// 		((testTotalScoredPoints / testTotalMaxScorePoints).toFixed(2) * 35).toFixed(2),
// 		10
// 	)
// 	return testGrade
// }

export const sortByLastName = (a, b) => {
	let lastNameA = a.lastName.toLowerCase()
	let lastNameB = b.lastName.toLowerCase()

	if (lastNameA < lastNameB) {
		return -1
	}
	if (lastNameA > lastNameB) {
		return 1
	}
	return 0
}
