const { default: mongoose } = require('mongoose');
let Pelicula = require('../models/peliculas');

module.exports = {
   create: function(req,res) {
      var pelicula = new Pelicula(req.body)
      pelicula.save(function(err, peli){
         if(err){
            return res.status(500).json({ 
               message: 'Error al guardar la pelicula', 
               error: err
            })
         }

         return res.status(200).json({
            message: 'Se guardó la pelicula',
            _id: peli._id
         })
      })
   },

   
   list: function(req, res) {
      Pelicula.find(function(err, pelis){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo las peliculas'
          })
        }
        return res.json(pelis)
      })
   },



   search: function (req, res) {
      Pelicula.find({Nombre: req.params.nombre }, function(err, peli) {
        if(err) {
          return res.status(500).json({
            message: 'Error en la búsqueda'
          })
        }
        return res.json(peli)
      })
   },



   remove: function (req, res) {
      Pelicula.remove({Nombre: req.body.nombrep }, function(err, peli){
         if(err) {
            return res.status(500).json({
              message: 'Error en la búsqueda de la peli a borrar'
            })
         }
         return res.status(200).json({message: 'Se borro correctamente la pelicula con el id: ' + req.params.id })
      })
   },



   update: function (req, res){
      var nombre = req.body.nombrep
      Pelicula.findOne({Nombre: nombre}, function(err, peli){
         if(err) {
            return res.status(500).json({
            message: 'Se ha producido un error al guardar la peli',
            error: err
            })
         }

         if(!peli) {
            return res.status(404).json({
               message: 'No hemos encontrado la peli'
            })
         }

         peli.Nombre = req.body.nombre
         peli.Autor = req.body.autor
         peli.FechaPub = req.body.fecha

         peli.save(function(err, peli){
            if(err) {
               return res.status(500).json({
                  message: 'Error al guardar la peli'
               })
            }
            if(!peli) {
               return res.status(404).json({
                  message: 'No hemos encontrado la peli'
               })
            }
            return res.json(peli)
         })
      })
   },

}
