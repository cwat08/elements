import React, {Component} from 'react'
import SearchBar from './search-bar'
import Html from './html'
import axios from 'axios'
class PageContainer extends Component {
  constructor() {
    super()
    this.state = {
      activeClass: '',
      html: [],
      searchUrl: '',
      invalidSearch: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleClick(evt) {
    await this.setState({activeClass: evt.target.getAttribute('name')})
    console.log(this.state.activeClass)
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const url = this.state.searchUrl
    const results = await axios.get(`/api/fetch/${url}`)
    if (results.data === 'error') {
      this.setState({invalidSearch: true})
      console.log(this.state.invalidSearch)
    } else {
      this.setState({html: results.data, activeClass: ''})
    }
  }

  handleChange(evt) {
    this.setState({searchUrl: evt.target.value})
  }

  render() {
    return (
      <div id="page-container">
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchUrl={this.state.searchUrl}
        />
        {this.state.invalidSearch ? (
          <h6 className="error-message">Please enter a valid url</h6>
        ) : null}
        {this.state.html.length ? (
          <div id="html-body">
            <Html
              handleClick={this.handleClick}
              html={this.state.html}
              activeClass={this.state.activeClass}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default PageContainer
