var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peliculaSchema = new Schema({
  Nombre: String,
  Autor: String,
  FechaPub: String,
})

var Pelicula = mongoose.model('peliculas', peliculaSchema)

module.exports = Pelicula;