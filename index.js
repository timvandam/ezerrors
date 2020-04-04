module.exports = new Proxy({
  Error,
  SyntaxError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
}, {
  get (target, property) {
    return target[property] || (target[property] = class extends Error {
      constructor (...args) {
        super(...args)
        this.name = property
      }
    })
  }
})
