'use strict'

// NPM dependencies
const express = require('express')

// Local dependencies
const getHomeController = require('./home/get.controller')
const getReferenceController = require('./reference/get.controller')
const getSummaryController = require('./summary/get.controller')
const postSummaryController = require('./summary/post.controller')

// Initialisation
const router = new express.Router()
const indexPath = '/'
const paths = {
  home: indexPath,
  reference: '/reference',
  summary: '/summary'
}

// Routing
router.get(paths.home, getHomeController)
router.get(paths.reference, getReferenceController)
router.get(paths.summary, getSummaryController)
router.post(paths.summary, postSummaryController)

// Export
module.exports = {
  router,
  paths
}
