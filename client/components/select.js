import React from 'react'

const Select = props => {
  return (
    <div className="search_categories">
      <div className="select">
        <select
          name="search_categories"
          id="search_categories"
          onChange={props.handleSelect}
        >
          <option value="https" defaultValue="selected">
            https://
          </option>
          <option value="http">http://</option>
        </select>
      </div>
    </div>
  )
}

export default Select
