import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const ADD_DOCUMENT = gql`
  mutation addDocument($input: AddDocumentInput) {
    addDocument(input: $input) {
      doc {
        content
      }
    }
  }
`

export const AssignmentSubmit = ({ value }) => {
  const [addDocument, { error }] = useMutation(ADD_DOCUMENT, {
    variables: { input: { doc: value } },
    onError: (error) => new Error(error),
  })
  return (
    <div>
      <button onClick={() => addDocument()}>Complete Assignment</button>
    </div>
  )
}
