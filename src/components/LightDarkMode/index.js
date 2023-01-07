// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickColorChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const containerClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const headingClassName = isDarkMode ? 'dark-mode' : 'light-mode-heading'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${containerClassName}`}>
          <h1 className={`heading ${headingClassName}`}>
            Click To Change Mode
          </h1>
          <button
            onClick={this.onClickColorChange}
            className="button"
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
