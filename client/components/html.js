import React from 'react'
// import {connect} from 'react-router'

const Html = props => {
  const isActive = str => {
    const a = props.activeClass === str
    //console.log(a)
    return a
  }

  const getTagName = str => {
    const a = str.indexOf('>')
    const b = str.indexOf('/')
    const c = str.indexOf(' ')
    const d = str.indexOf('\n')
    if (str[1] === '/') {
      const newStr = str.slice(2, a)
      // console.log(newStr)
      return newStr
    } else {
      const arr = [a, b, c, d]
      const filtered = arr.filter(n => n >= 0)
      const idx = Math.min(...filtered)
      return str.slice(1, idx)
    }
  }

  return (
    <div>
      {/* <pre> */}
      {/* {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'} */}
      {props.html.map((e, i) => {
        // let idx = e.indexOf('>')
        let idx = i
        let classname = getTagName(e)
        return (
          <div
            className={
              isActive(classname)
                ? `${classname} active html-element`
                : `{classname} html-element`
            }
            onClick={props.handleClick}
            name={classname}
            key={idx}
          >
            {e}
            <br />
          </div>
        )
      })}
      {/* </pre> */}
    </div>
  )
}

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
