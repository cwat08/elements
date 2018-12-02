import React, {Component} from 'react'
import SearchBar from './search-bar'
import Html from './html'
import axios from 'axios'
import Loader from './loader'

class PageContainer extends Component {
  constructor() {
    super()
    this.state = {
      activeTag: '',
      html: [],
      searchUrl: '',
      searchInput: '',
      invalidSearch: false,
      protocol: 'https',
      loading: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSurprise = this.handleSurprise.bind(this)
  }

  async handleClick(evt) {
    await this.setState({activeTag: evt.target.getAttribute('name')})
  }

  async handleSurprise() {
    try {
      this.setState({loading: true, invalidSearch: false, html: []})
      const results = await axios.get('/api/search/surprise')
      this.setState({
        html: results.data.html,
        searchUrl: results.data.url,
        activeTag: '',
        loading: false
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  async handleSubmit(evt) {
    try {
      evt.preventDefault()
      if (!this.state.searchInput) {
        this.setState({invalidSearch: true})
      } else {
        const url = this.state.searchInput
        const protocol = this.state.protocol
        this.setState({invalidSearch: false, loading: true, html: []})
        const results = await axios.get(`/api/search/${protocol}/${url}`)
        if (results.data === 'Invalid Url') {
          this.setState({invalidSearch: true, loading: false})
        } else {
          this.setState({
            html: results.data,
            searchUrl: url,
            searchInput: '',
            activeTag: '',
            loading: false
          })
        }
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  handleChange(evt) {
    this.setState({searchInput: evt.target.value})
  }

  async handleSelect(evt) {
    await this.setState({protocol: evt.target.value})
  }

  render() {
    return (
      <div id="page-container">
        <div>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            searchInput={this.state.searchInput}
            handleSelect={this.handleSelect}
            handleSurprise={this.handleSurprise}
            invalidSearch={this.state.invalidSearch}
          />
        </div>
        {this.state.loading ? <Loader /> : null}
        {this.state.html.length ? (
          <div id="html-container">
            <div id="page-name">
              <div>SOURCE CODE FOR: </div>
              <a href={`https://${this.state.searchUrl}`} target="_blank">{`${
                this.state.searchUrl
              }`}</a>
            </div>

            <div id="html-body">
              <Html
                handleClick={this.handleClick}
                html={this.state.html}
                activeTag={this.state.activeTag}
              />
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default PageContainer
