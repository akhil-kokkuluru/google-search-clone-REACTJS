import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props
    console.log(suggestionsList)
    return (
      <div className="contentBG">
        <img
          alt="google logo"
          className="googleLogo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="contentContainer">
          <div className="ElementsContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searcEl"
              alt="search icon"
            />
            <input
              type="search"
              className="inputEl"
              placeholder="Search Google"
            />
          </div>
          <ul className="unOdered">
            <SuggestionItem suggestionsList={suggestionsList[0]} />
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
