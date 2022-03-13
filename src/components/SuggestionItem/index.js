import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onClicking} = props
  const {id, suggestion} = suggestionsList

  const onClickSuggestion = () => {
    onClicking(suggestion)
  }

  return (
    <li className="listing">
      <p className="searchText">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
