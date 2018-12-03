const getHtmlArr = str => {
  return str
    .split('<')
    .map(e => {
      return `<${e}`
    })
    .slice(1)
}

module.exports = getHtmlArr
