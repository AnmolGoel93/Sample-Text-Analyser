import { useEffect, useRef } from 'react'
import './index.scss'

const TextArea = ({ textAreaValue, textAreaValueChangeHandler }) => {
  const textAreaRef = useRef()
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus()
    }
  }, [])

  return (
    <textarea
      ref={textAreaRef}
      className="text-area"
      placeholder="Paste your text here..."
      onChange={textAreaValueChangeHandler}
      value={textAreaValue}
    />
  )
}

export default TextArea
