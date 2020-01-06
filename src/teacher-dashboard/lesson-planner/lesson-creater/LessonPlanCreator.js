import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import LessonName from './LessonName'
import UnitLoader from './UnitLoader'
import EssentialQuestion from './EssentialQuestion'
import Readings from './Readings'
import Vocab from './Vocab'
import SocraticQuestions from './SocraticQuestions'
import StudyGuideQuestions from './StudyGuideQuestions'
import WorkDue from './WorkDue'
import NewLessonCreater from './NewLessonCreater'

const LESSON_CREATOR_ENUM_NAMES_QUERY = gql`
	query lessonCreatorEnumNamesForLessonPlanCreator {
		gradeLevels: __type(name: "GradeLevelEnum") {
			enumValues {
				name
			}
		}
		essentialQuestionTypeEnum: __type(name: "essentialQuestionTypeEnum") {
			enumValues {
				name
			}
		}
		majorTextStructureEnum: __type(name: "majorTextStructureEnum") {
			enumValues {
				name
			}
		}
		socraticQuestionsTypeEnum: __type(name: "socraticQuestionsTypeEnum") {
			enumValues {
				name
			}
		}
		partsOfSpeechEnum: __type(name: "partsOfSpeechEnum") {
			enumValues {
				name
			}
		}
		AssignmentType: __type(name: "AssignmentType") {
			enumValues {
				name
			}
		}
	}
`

const LessonPlanCreator = ({ match }) => {
	const { loading, data, error } = useQuery(LESSON_CREATOR_ENUM_NAMES_QUERY)
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)
	const {
		gradeLevels,
		essentialQuestionTypeEnum,
		majorTextStructureEnum,
		socraticQuestionsTypeEnum,
		partsOfSpeechEnum,
		AssignmentType
	} = data

	return (
		<LessonPlanCreatorDisplay
			gradeLevels={gradeLevels.enumValues.map(value => value.name)}
			essentialQuestionTypeEnum={essentialQuestionTypeEnum.enumValues.map(value => value.name)}
			majorTextStructureEnum={majorTextStructureEnum.enumValues.map(value => value.name)}
			socraticQuestionsTypeEnum={socraticQuestionsTypeEnum.enumValues.map(value => value.name)}
			partsOfSpeechEnum={partsOfSpeechEnum.enumValues.map(value => value.name)}
			AssignmentType={AssignmentType.enumValues.map(
				value => value.name
			)}></LessonPlanCreatorDisplay>
	)
}

const LessonPlanCreatorDisplay = ({
	gradeLevels,
	essentialQuestionTypeEnum,
	majorTextStructureEnum,
	socraticQuestionsTypeEnum,
	partsOfSpeechEnum,
	AssignmentType
}) => {
	const [lessonName, setLessonName] = useState('')
	const [unitName, setUnitName] = useState('')
	const [warmUpActivity, setWarmUpActivity] = useState('')
	const [essentialQuestionValues, setEssentialQuestionValues] = useState({
		type: essentialQuestionTypeEnum[0],
		textStructure: majorTextStructureEnum[0],
		question: ''
	})
	const [readingsValues, setReadingsValues] = useState({ pages: '', sections: '' })
	const [vocabWordList, setVocabWordList] = useState([])
	const [socraticQuestionsList, setSocraticQuestionsList] = useState([])
	const [studyGuideQuestionList, setStudyGuideQuestionList] = useState([])
	const [workDueList, setWorkDueList] = useState([])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				color: 'var(--blue)',
				backgroundColor: 'var(--white)'
			}}>
			<div
				style={{
					textAlign: 'center',
					textDecoration: 'underline',
					fontSize: '250%',
					marginBottom: '3%'
				}}>
				Lesson Planner
			</div>
			<LessonName lessonName={lessonName} setLessonName={setLessonName} />
			<UnitLoader grade={gradeLevels} unitName={unitName} setUnitName={setUnitName} />
			<EssentialQuestion
				essentialQuestionTypeEnum={essentialQuestionTypeEnum}
				majorTextStructureEnum={majorTextStructureEnum}
				essentialQuestionValues={essentialQuestionValues}
				setEssentialQuestionValues={setEssentialQuestionValues}
			/>
			<Readings readingsValues={readingsValues} setReadingsValues={setReadingsValues} />
			<Vocab
				vocabWordList={vocabWordList}
				setVocabWordList={setVocabWordList}
				partsOfSpeechEnum={partsOfSpeechEnum}
			/>
			<SocraticQuestions
				socraticQuestionsList={socraticQuestionsList}
				setSocraticQuestionsList={setSocraticQuestionsList}
				socraticQuestionsTypeEnum={socraticQuestionsTypeEnum}
			/>
			<StudyGuideQuestions
				studyGuideQuestionList={studyGuideQuestionList}
				setStudyGuideQuestionList={setStudyGuideQuestionList}
			/>
			<WorkDue
				AssignmentType={AssignmentType}
				workDueList={workDueList}
				setWorkDueList={setWorkDueList}
			/>
			<NewLessonCreater
				lessonName={lessonName}
				unitName={unitName}
				warmUpActivity={warmUpActivity}
				essentialQuestionValues={essentialQuestionValues}
				readingsValues={readingsValues}
				vocabWordList={vocabWordList}
				socraticQuestionsList={socraticQuestionsList}
				studyGuideQuestionList={studyGuideQuestionList}
				workDueList={workDueList}
			/>
		</div>
	)
}

export default LessonPlanCreator
