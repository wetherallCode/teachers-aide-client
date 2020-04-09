import React, { useMemo, useState, useCallback } from 'react'
import { createEditor, Transforms, Editor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { AssignmentSubmit } from './AssignmentSubmit'
import { RetrieveAssignment } from './RetrieveAssignment'

export const PracticeAssignment = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph' }],
    },
  ])
  console.log(value)
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])
  const element = JSON.stringify(value)

  return (
    <>
      <div style={{ border: '1px solid var(--blue)' }}>
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => {
            setValue(value)
            // const content = JSON.stringify(value)
          }}
        >
          <Editable
            renderElement={renderElement}
            onKeyDown={(e) => {
              if (e.key === '`' && e.ctrlKey) {
                e.preventDefault()
                const [match] = Editor.nodes(editor, {
                  match: (n) => n.type === 'code',
                })
                Transforms.setNodes(
                  editor,
                  { type: match ? 'paragraph' : 'code' },
                  { match: (n) => Editor.isBlock(editor, n) }
                )
              }
            }}
          />
        </Slate>
        <AssignmentSubmit value={element} />
      </div>
      <RetrieveAssignment />
    </>
  )
}

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}
const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>
}
