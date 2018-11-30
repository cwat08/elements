import React from 'react'

const Select = props => {
  return (
    <div className="search_categories">
      <div className="select">
        <select name="search_categories" id="search_categories">
          <option value="1" selected="selected">
            Happy
          </option>
          <option value="2">Great</option>
          <option value="3">Nice Solution</option>
          <option value="4">Awesome</option>
        </select>
      </div>
    </div>
  )
}

export default Select
