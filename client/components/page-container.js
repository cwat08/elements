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
      searchUrl: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(evt) {
    this.setState({activeClass: evt.target.getAttribute('name')})
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const url = this.state.searchUrl
    const results = await axios.get(`/api/fetch/${url}`)
    this.setState({html: results.data})
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
