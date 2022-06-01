// Archivo donde van las rutas del servidor
var peliculasController=require('../controllers/peliculasController');
var router = require('express').Router()


router.get('/', function(req, res){
  peliculasController.list(req,res);
})

router.get('/:nombre', function(req, res) {
  peliculasController.search(req,res);
})

router.post('/', function(req, res) {
  peliculasController.create(req,res);
})

router.delete('/', function(req,res){
  peliculasController.remove(req,res);
})

router.put('/', function(req, res){
  peliculasController.update(req,res);
})

//url:puerto/api/peliculas
module.exports = router