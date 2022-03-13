import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  onClickingImage = valuesInsearch => {
    const {searchText} = this.state

    this.setState({searchText: valuesInsearch})
  }

  onInputtyping = tpying => {
    const typingValue = tpying.target.value

    const {searchText} = this.state

    this.setState({searchText: typingValue})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchText} = this.state
    const modifiedList = suggestionsList.filter(items =>
      items.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )

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
              value={searchText}
              onChange={this.onInputtyping}
            />
          </div>
          <ul className="unOdered">
            {modifiedList.map(newElement => (
              <SuggestionItem
                suggestionsList={newElement}
                key={newElement.id}
                onClicking={this.onClickingImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
