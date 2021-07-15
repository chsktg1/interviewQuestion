// Write you Code here
import {Component} from 'react'

import './index.css'

import Filters from '../Filters'

import InterviewQuestion from '../InterviewQuestion'

class InterviewQuestionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {questionsData: props.questionsData}
  }

  changed = event => {
    // const SelectedValue = event.target.value
    // eslint-disable-next-line prefer-const
    let {questionsData} = this.props
    // if (event.target.id === 'diff') {
    //   if (SelectedValue !== 'ALL') {
    //     console.log('here')
    //     const newDiffData = questionsData.filter(
    //       e => e.difficultyLevel === SelectedValue,
    //     )
    //     console.log(newDiffData)
    //     this.setState({questionsData: newDiffData})
    //   } else {
    //     this.setState({questionsData})
    //   }
    // } else {
    //   // eslint-disable-next-line no-lonely-if
    //   if (SelectedValue !== 'ALL') {
    //     console.log('language')
    //     const newDiffData = questionsData.filter(
    //       e => e.language === SelectedValue,
    //     )
    //     this.setState({questionsData: newDiffData})
    //   } else {
    //     this.setState({questionsData})
    //   }
    // }
    const diff = document.getElementById('diff').value
    const lang = document.getElementById('lang').value
    console.log(diff)
    console.log(lang)
    if (diff !== 'ALL' && lang !== 'ALL') {
      console.log('no-all')
      // eslint-disable-next-line prettier/prettier
      const alp = questionsData.filter(
        e => e.language === lang && e.difficultyLevel === diff,
      )
      //   console.log(alp)
      this.setState({questionsData: alp})
      console.log('done-no-all')
    } else if (diff === 'ALL' && lang === 'ALL') {
      this.setState({questionsData})
    } else if (diff === 'ALL') {
      console.log('diff-all')
      const alp = questionsData.filter(e => e.language === lang)

      this.setState({questionsData: alp})
    } else if (lang === 'ALL') {
      console.log('lang-all')
      const alp = questionsData.filter(e => e.difficultyLevel === diff)
      this.setState({questionsData: alp})
    }
  }

  render() {
    const {levelsData, categoryData} = this.props
    const {questionsData} = this.state
    return (
      <div className="bg-container">
        <div className="top-bar">
          <h1 className="text30">30 Seconds of Interviews</h1>
          <img
            id="veryBigImg"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="inter"
          />
        </div>

        <div className="filters">
          <div className="fil-data">
            <label htmlFor="lang">LANGUAGE</label>
            <select onChange={this.changed} id="lang">
              {categoryData.map(eachLevel => (
                <Filters
                  eachLevel={eachLevel}
                  key={eachLevel.id}
                  data="language"
                />
              ))}
            </select>
          </div>

          <div className="fil-data">
            <label htmlFor="diff">DIFFICULTY LEVEL</label>
            <select onChange={this.changed} id="diff">
              {levelsData.map(eachLevel => (
                <Filters
                  eachLevel={eachLevel}
                  key={eachLevel.id}
                  data="level"
                />
              ))}
            </select>
          </div>
        </div>
        <ul>
          {questionsData.map(eachQuestion => (
            <InterviewQuestion
              eachQuestion={eachQuestion}
              key={eachQuestion.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default InterviewQuestionsApp
