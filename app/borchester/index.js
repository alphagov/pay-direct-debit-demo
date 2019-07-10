'use strict'

// NPM dependencies
const express = require('express')

// Local dependencies
const getHomeController = require('./home/get.controller')
const getReferenceController = require('./reference/get.controller')
const getSummaryController = require('./summary/get.controller')

// Initialisation
const router = new express.Router()
const indexPath = '/borchester'
const paths = {
  home: indexPath,
  reference: `${indexPath}/reference`,
  summary: `${indexPath}/summary`
}

// Routing
router.get(paths.home, getHomeController)
router.get(paths.reference, getReferenceController)
router.get(paths.summary, getSummaryController)

// Export
module.exports = {
  router,
  paths
}
