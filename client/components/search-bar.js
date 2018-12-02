import React from 'react'
import Select from './select'

const Search = props => {
  return (
    <div id="search-bar-container">
      <div id="search-bar">
        <Select handleSelect={props.handleSelect} />
        <form>
          <input
            name="search"
            value={props.searchInput}
            onChange={props.handleChange}
          />
          <button type="submit" onClick={props.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {props.invalidSearch ? (
        <div className="error-message">Please enter a valid url</div>
      ) : null}
      <div id="surprise-me" onClick={props.handleSurprise}>
        SURPRISE ME!
      </div>
    </div>
  )
}

export default Search
