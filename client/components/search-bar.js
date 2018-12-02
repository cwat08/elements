import React, {Component} from 'react'
import Select from './select'
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
      <div id="search-bar-container">
        <div id="search-bar">
          <div className="search_categories">
            <div className="select">
              <select
                name="search_categories"
                id="search_categories"
                onChange={this.props.handleSelect}
              >
                <option value="https" defaultValue="selected">
                  https://
                </option>
                <option value="http">http://</option>
              </select>
            </div>
          </div>
          <form>
            <input
              name="search"
              value={this.props.searchInput}
              onChange={this.props.handleChange}
            />
            <button type="submit" onClick={this.props.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        {this.props.invalidSearch ? (
          <div className="error-message">Please enter a valid url</div>
        ) : null}
        {/* <div id="surprise-me-container"> */}
        {/* <form id="surprise-me-container"> */}
        <div id="surprise-me" onClick={this.props.handleSurprise}>
          SURPRISE ME!
        </div>
        {/* </form> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Search
