import React, { useMemo, useState, useCallback } from 'react'
import { createEditor, Transforms, Editor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

export const AssignmentGrader = ({ assignment }) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState(assignment)
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

export default AssignmentGrader
