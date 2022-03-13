import './index.css'

const SuggestionItem = props => {
  const {suggestionsList} = props
  const {id, suggestion} = suggestionsList
  return (
    <li className="listing">
      <p className="searchText">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowImg"
      />
    </li>
  )
}
export default SuggestionItem
