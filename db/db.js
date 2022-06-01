var mongoose = require('mongoose')

var user = 'JairUwU';
var pwd = 'Jair123UwU';

mongoose.Promise = global.Promise

mongoose.connect(`mongodb+srv://${user}:${pwd}@cluster0.lbf6fco.mongodb.net/?retryWrites=true&w=majority`)
  .then(()=>{
    console.log('Conexión exitosa con la Base de Datos');
  })
  .catch((e)=>{
    console.log('Error de conexión: '+ e);
  })