// Write you Code here
import {Component} from 'react'

import './index.css'

class Filters extends Component {
  //   constructor(props) {
  //     super(props)
  //     state = {selectedLanguage: props.selected}
  //   }
  state = {selected: 'all'}

  render() {
    const {eachLevel} = this.props
    const {data} = this.props
    // console.log(data)
    return <option>{eachLevel[data]}</option>
  }
}

export default Filters
