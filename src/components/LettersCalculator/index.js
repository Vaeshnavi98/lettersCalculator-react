import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    count: 0,
  }

  onChangeEvent = event => {
    this.setState({
      searchInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {searchInput, count} = this.state

    return (
      <div className="main-div">
        <div className="div-deco">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="html">Enter the phrase</label>
          <input
            placeholder="Enter the phrase"
            onChange={this.onChangeEvent}
            value={searchInput}
            id="html"
          />
          <p className="para-deco">No.of Letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img-deco"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
