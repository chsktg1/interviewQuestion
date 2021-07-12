// Write you Code here
import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {
    showOrHide: 'Show',
    upOrDown: 'https://assets.ccbp.in/frontend/react-js/down-arrow.png',
    altText: 'down arrow',
  }

  clciked = event => {
    console.log('aa')
    const textToDisp = event.target.textContent === 'Show' ? 'Hide' : 'Show'
    const upd =
      event.target.textContent === 'Show'
        ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
        : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

    const alT = event.target.textContent === 'Show' ? 'up arrow' : 'down arrow'
    console.log(event.target.textContent)
    console.log(textToDisp)
    this.setState({showOrHide: textToDisp, upOrDown: upd, altText: alT})
  }

  render() {
    const {showOrHide, upOrDown, altText} = this.state
    const {eachQuestion} = this.props
    const {questionText, answerText, language, difficultyLevel} = eachQuestion
    return (
      <li>
        <span className="alpDiff">{difficultyLevel}</span>

        <span className="alpLan">{language}</span>
        <h1>{questionText}</h1>
        <div className="showHideDiv">
          <button type="button" className="spe" onClick={this.clciked}>
            {showOrHide}
          </button>
          <div>
            <img src={upOrDown} alt={altText} />
          </div>
        </div>
        {showOrHide === 'Hide' && <div>{answerText}</div>}
      </li>
    )
  }
}

export default InterviewQuestion
