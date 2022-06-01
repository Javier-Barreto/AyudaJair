var router = require('express').Router()
 
var peliculas = require('./peliculas')
router.use('/peliculas', peliculas)
 
router.get('/', function (req, res) {
  res.status(200).json({ message: 'Conectado a la cabecera principal' })
})

//localhost:1339/api
module.exports = router