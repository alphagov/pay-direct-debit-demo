'use strict'

module.exports = (req, res) => {
  res.render('app/borchester/summary/template', req.flash())
}
