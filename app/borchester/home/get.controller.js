'use strict'

module.exports = (req, res) => {
  res.render('app/borchester/home/template', req.flash())
}
