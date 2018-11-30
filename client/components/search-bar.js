import React, {Component} from 'react'

class Search extends Component {
  constructor() {
    super()
    // this.state = {
    //   searchUrl: ''
    // }
  }
  // handleChange(evt) {
  //   this.setState({searchUrl: evt.target.value})
  // }
  render() {
    return (
      <div>
        <form id="search-bar">
          {/* <div id="https">https:// </div> */}
          <select onChange={this.props.handleSelect}>
            <option slected="selected" value="https">
              https://
            </option>
            <option value="http">http://</option>
          </select>
          <input
            name="search"
            value={this.props.searchUrl}
            onChange={this.props.handleChange}
          />
          <button type="submit" onClick={this.props.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Search
