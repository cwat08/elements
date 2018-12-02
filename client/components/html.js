import React from 'react'

const Html = props => {
  let prevTag = ''

  const isActive = tag => {
    return props.activeTag === tag
  }

  const getOpenTagObj = (str, idx, a, elementObj) => {
    elementObj.tag = str.slice(1, idx)
    elementObj.element = str.slice(a + 1)
    elementObj.type = 'opening'
    elementObj.closing = '>'
    elementObj.tagInfo = str.slice(idx, a)
    return elementObj
  }

  const getSelfClosingTagObj = (str, idx, elementObj) => {
    elementObj.tag = str.slice(1, idx)
    elementObj.tagInfo = str.slice(idx, str.length - 2)
    elementObj.closing = '/>'
    elementObj.type = 'self-closing'
    return elementObj
  }

  const getClosingTagObj = (str, a, elementObj) => {
    elementObj.tag = str.slice(2, a)
    elementObj.closing = str.slice(a)
    elementObj.type = 'closing'
    return elementObj
  }

  const getEmptyTagObj = elementObj => {
    elementObj.tagInfo = elementObj.tag
    elementObj.tag = prevTag
    elementObj.inheritTag = true
    return elementObj
  }

  const getElementInfo = str => {
    let elementObj = {
      tag: null,
      element: '',
      type: null,
      closing: '',
      tagInfo: '',
      inheritTag: false
    }

    const a = str.indexOf('>')
    const b = str.indexOf('/')
    const c = str.indexOf(' ')
    const d = str.indexOf('\n')

    const indicesArr = [a, b, c, d]
    const filtered = indicesArr.filter(n => n >= 0)
    const idx = Math.min(...filtered)

    //check if it's a closing tag
    if (str[1] === '/') {
      elementObj = getClosingTagObj(str, a, elementObj)

      //check if it's a self-closing tag
    } else if (b === str.length - 2) {
      elementObj = getSelfClosingTagObj(str, idx, elementObj)

      //lastly it would be an opening tag
    } else {
      elementObj = getOpenTagObj(str, idx, a, elementObj)
    }
    //check to see if it is an 'empty' tag (contains symbols or numbers).
    //if it's an 'empty' tag, give it the classname of previous tag
    const regex = /[0-9]|[@$%^&*()_+\[\]{};:\\|,.\/?]/g
    if (elementObj.tag.search(regex) > -1 || elementObj.tag === '') {
      elementObj = getEmptyTagObj(elementObj)
    } else {
      prevTag = elementObj.tag
    }
    return elementObj
  }

  return (
    <div>
      <pre>
        {props.html.map((e, i) => {
          const idx = i
          const htmlObject = getElementInfo(e)
          const tag = htmlObject.tag
          const element = htmlObject.element
          const closing = htmlObject.closing
          const type = htmlObject.type
          const tagInfo = htmlObject.tagInfo
          const inheritTag = htmlObject.inheritTag

          return (
            <div key={idx}>
              <div
                className={
                  isActive(tag)
                    ? `${tag} active html-element`
                    : `${tag} html-element`
                }
              >
                {type === 'closing' ? '</' : '<'}
                {inheritTag ? null : (
                  <div
                    className={
                      isActive(tag) ? `${tag} active tag` : `${tag} tag`
                    }
                    name={tag}
                    onClick={props.handleClick}
                  >
                    {tag}
                  </div>
                )}
                {type === 'self-closing'
                  ? `${tagInfo}${closing}`
                  : `${tagInfo}${closing}${element}`}
              </div>
              <br />
            </div>
          )
        })}
      </pre>
    </div>
  )
}

export default Html
