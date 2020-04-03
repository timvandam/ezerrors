module.exports = new Proxy({}, {
  get (target, property) {
    return target[property] || (target[property] = class extends Error {
      constructor (...args) {
        super(...args)
        this.name = property
      }
    })
  }
})
