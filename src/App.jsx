import './App.scss'
import React, { useEffect, useState } from 'react'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [textAreaValue, setTextAreaValue] = useState('')
  const [resultValue, setResultValue] = useState({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
  })

  const [bottomResultValue, setBottomResultValue] = useState({
    averageTime: '-',
    longestWord: '-',
  })

  const findLongestWord = (words) => {}

  const countPronouns = (words) => {
    const pronounsFound = words.filter((val) => pronouns.indexOf(val) !== -1)
    return pronounsFound.length
  }

  const countSentences = (textAreaValue) => {}

  const countParagraphs = (textAreaValue) => {}

  useEffect(() => {
    if (textAreaValue.length === 0) {
      setResultValue({ words: 0, characters: 0, sentences: 0, paragraphs: 0, pronouns: 0 })
      setBottomResultValue({ averageTime: '-', longestWord: '-' })
    } else {
      const words = textAreaValue.split(' ').filter((val) => val !== '')
      setResultValue({
        words: words.length,
        characters: textAreaValue.length,
        sentences: countSentences(textAreaValue),
        paragraphs: countParagraphs(textAreaValue),
        pronouns: countPronouns(words),
      })

      setBottomResultValue({
        averageTime: `~ ${Math.ceil(words.length / 225).toFixed(0)} minutes`,
        longestWord: findLongestWord(words),
      })
    }
  }, [textAreaValue])

  const textAreaValueChangeHandler = (e) => {
    setTextAreaValue(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox resultValue={resultValue} />
          <TextArea
            textAreaValue={textAreaValue}
            textAreaValueChangeHandler={textAreaValueChangeHandler}
          />
          <BottomResultBox bottomResultValue={bottomResultValue} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
