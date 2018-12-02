import React from 'react'

const Buttons = props => {
  return (
    // <form id="surprise-me-container">
    <div id="buttons-container">
      <form id="buttons-form" onKeyDown={props.handleKeyDown}>
        <div className="btn">
          <button id="surprise-me" type="button" onClick={props.handleSurprise}>
            Surprise Me!
          </button>
        </div>{' '}
        <div className="btn">
          <button id="submit" type="submit" onClick={props.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Buttons
