'use strict'

// Local dependencies
const { validator } = require('../../common/utils/field-validator')

module.exports = (req, res) => {
  const supportType = req.body['support-type']

  if (supportType === 'somethings-wrong') {
    return res.redirect('/')
  }

  if (supportType === 'help') {
    return res.redirect('/')
  }

  const errors = validator([
    {
      name: 'support-type',
      type: 'radio',
      validate: 'required',
      value: req.body['support-type'],
      label: 'How can we help you?',
      id: 'support-type',
      message: 'Please choose an option'
    }
  ])

  if (errors) {
    req.flash('error', errors)
    return res.redirect('/')
  }
}
