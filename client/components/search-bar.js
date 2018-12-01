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
            {/* <div className="search-categories">
            <div className="select">
              <select
                name={'search-categories'}
                id="search-categoris"
                onChange={this.props.handleSelect}
              >
                <option slected="selected" value="https">
                  https://
                </option>
                <option value="http">http://</option>
              </select>
            </div>
          </div> */}
            <input
              name="search"
              value={this.props.searchInput}
              onChange={this.props.handleChange}
            />

            {/* <button type="submit" onClick={this.props.handleSubmit}>
              Submit
            </button> */}
          </form>
          {/* <Select /> */}
        </div>
        {/* <form id="surprise-me-container">
          <button
            id="surprise-me"
            type="button"
            onClick={this.props.handleSurprise}
          >
            Surprise Me!
          </button>
        </form> */}
      </div>
    )
  }
}

export default Search
