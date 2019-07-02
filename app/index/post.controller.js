'use strict'

// NPM dependencies
const got = require('got')

module.exports = async (req, res) => {
  try {
    const { body } = await got.post(
      'https://publicapi.payments.service.gov.uk/v1/directdebit/mandates',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DD_API_KEY}`
        },
        body: JSON.stringify({
          'reference': 'JONHESLOP-TEST-1',
          'return_url': 'https://pay-direct-debit-demo.cloudapps.digital/success'
        })
      }
    )
    return res.redirect(JSON.parse(body)['_links'].next_url.href)
  } catch (error) {
    console.log('ERROR >>>', error)
    req.flash('error', 'Something went wrong, please try again')
    return res.redirect('/')
  }
}
