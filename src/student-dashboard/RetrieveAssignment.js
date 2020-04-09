import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import AssignmentGrader from './AssignmentGrader'

const RETRIEVE_ASSIGNNMENT = gql`
  query retrieveAssignment($_id: ID!) {
    loadDocument(_id: $_id) {
      _id
      doc
    }
  }
`

export const RetrieveAssignment = () => {
  const { loading, error, data } = useQuery(RETRIEVE_ASSIGNNMENT, {
    variables: { _id: '5e8cc3bfa5b1bc00243b78b0' },
  })
  if (loading) return null
  if (error) console.error(error)
  const { doc } = data.loadDocument
  //   console.log(data.loadDocument)
  const parsedAssignment = JSON.parse(doc)
  console.log(parsedAssignment)
  return (
    <div>
      <div>Find Assignment</div>
      <AssignmentGrader assignment={parsedAssignment} />
    </div>
  )
}
