var express = require('express')
var app = express()       
var cors=require('cors');
var bodyParser = require('body-parser')        
 
var port = process.env.PORT || 1339
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            
 
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./routes')
app.use('/api', router)


//Comienza el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

require('../db/db.js')