import React from 'react'
// import {connect} from 'react-router'

const Html = props => {
  const isActive = str => {
    const a = props.activeClass === str
    //console.log(a)
    return a
  }

  const getTagName = str => {
    const elementObj = {
      tag: null,
      element: '',
      type: null,
      closing: '',
      tagInfo: ''
    }
    const a = str.indexOf('>')
    const b = str.indexOf('/')
    const c = str.indexOf(' ')
    const d = str.indexOf('\n')
    const arr = [a, b, c, d]
    const filtered = arr.filter(n => n >= 0)
    const idx = Math.min(...filtered)
    //check if it's a closing tag
    if (str[1] === '/') {
      elementObj.tag = str.slice(2, a)
      elementObj.closing = str.slice(a)
      elementObj.type = 'closing'

      //check if it's a self-closing tag
    } else if (b === str.length - 2) {
      elementObj.tag = str.slice(1, idx)
      elementObj.tagInfo = str.slice(idx, str.length - 2)
      elementObj.closing = '/>'
      elementObj.type = 'self-closing'

      //tag info is everything after tag before closing
      //lastly it would be an opening tag
    } else {
      elementObj.tag = str.slice(1, idx)
      elementObj.element = str.slice(a + 1)
      elementObj.type = 'opening'
      elementObj.closing = '>'
      elementObj.tagInfo = str.slice(idx, a)
      //tag info is everything after tag before >
    }
    //check to see if it is an 'empty' tag (contains symbols or numbers) and classify as such
    const regex = /[0-9]|[@#$%^&*()_+\[\]{};:\\|,.\/?]/g
    if (elementObj.tag.search(regex) > -1) {
      elementObj.tagInfo = elementObj.tag
      elementObj.tag = ''
    }
    return elementObj
  }
  // const html = ['<div> Some text here', '</div>']
  //return idx of end of tag
  //create two divs
  //first is tag div which would be e.slice(1, idx)
  //second would be element div which would be e.slice(idx +1)
  return (
    <div>
      <pre>
        {/* <pre> */}
        {/* {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'} */}
        {props.html.map((e, i) => {
          // let idx = e.indexOf('>')
          const idx = i
          const htmlObject = getTagName(e)
          //console.log(htmlObject)
          const tag = htmlObject.tag
          //console.log(tag)
          const element = htmlObject.element
          const closing = htmlObject.closing
          const type = htmlObject.type
          const tagInfo = htmlObject.tagInfo

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
                <div
                  className={isActive(tag) ? `${tag} active tag` : `${tag} tag`}
                  name={tag}
                  onClick={props.handleClick}
                >
                  {tag}
                </div>
                {type === 'self-closing'
                  ? `${tagInfo}${closing}`
                  : `${tagInfo}${closing}${element}`}
              </div>
            </div>
          )
        })}
      </pre>
    </div>
  )
}

//<div>Something </div>
//div className =
//wrap tags in another div and then give it an additiona class name element and give tage classname tag

// createMarkup() {
//   return {
//     __html: `
//     <div id="app"></div>
//   `
//   }
// }

//&amp; → & (ampersand, U+0026)
// &lt; → < (less-than sign, U+003C)
// &gt; → > (greater-than sign, U+003E)
// &quot; → " (quotation mark, U+0022)
// &apos; → ' (apostrophe, U+0027)

//   render() {
//     return (
//       <div>
//         {/* <div dangerouslySetInnerHTML={{__html: '&lth1&gtHello World</h1>'}} /> */}
//         <div>
//           <pre>
//             <code>
//               <h1 name="name" onClick={this.handleClick}>
//                 My name is Claire
//               </h1>
//             </code>
//           </pre>
//           {this.state.html.map((e, i) => {
//             // let idx = e.indexOf('>')
//             let idx = i
//             let classname = this.getTagName(e)
//             return (
//               <div
//                 className={
//                   this.isActive(classname) ? `${classname} active` : {classname}
//                 }
//                 onClick={this.handleClick}
//                 name={classname}
//                 key={idx}
//               >
//                 {e}
//                 <br />
//               </div>
//             )
//           })}

//           {/* <h1>{`<h1>`}</h1>
//           {`Hello again`}
//           <h1>{`</h1>`}</h1>
//           <br />
//           <div>{`<div>`}</div>
//           {`hi hi`}
//           <div>{`</div>`}</div> */}
//         </div>
//       </div>
//     )
//   }
// }
//

export default Html

/////</div>

////    <div
// className={
//   isActive(className)
//     ? `${className} active tag`
//     : `${className} tag`
// }
// onClick={props.handleClick}
// name={className}
// key={idx}
// >
// {tag}
// </div>
// <div className="html-element">{element}</div>

// {/* <div
// className={
//   isActive(tagName)
//     ? `${tagName} active html-element`
//     : `${tagName} html-element`
// }
// >
// {element}
// </div> */}
// <br />
// </div>
