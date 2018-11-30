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
      invalidSearch: false,
      protocol: 'https'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  async handleClick(evt) {
    await this.setState({activeClass: evt.target.getAttribute('name')})
    console.log(this.state.activeClass)
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const url = this.state.searchUrl
    const protocol = this.state.protocol
    const results = await axios.get(`/api/fetch/${protocol}/${url}`)
    if (results.data === 'error') {
      this.setState({invalidSearch: true})
      console.log(this.state.invalidSearch)
    } else {
      this.setState({html: results.data, activeClass: '', invalidSearch: false})
    }
  }

  handleChange(evt) {
    this.setState({searchUrl: evt.target.value})
  }
  async handleSelect(evt) {
    await this.setState({protocol: evt.target.value})
    console.log(this.state.protocol)
  }

  render() {
    return (
      <div id="page-container">
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchUrl={this.state.searchUrl}
          handleSelect={this.handleSelect}
        />
        {this.state.invalidSearch ? (
          <div className="error-message">Please enter a valid url</div>
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
