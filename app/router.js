'use strict'

// Local dependencies
const healthcheck = require('./healthcheck')
const success = require('./success')
const borchester = require('./borchester')

// Export
module.exports.bind = app => {
  app.use(healthcheck.router)
  app.use(success.router)
  app.use(borchester.router)
}
