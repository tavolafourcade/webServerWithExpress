let express = require('express');

const app = express();

//console.log(app)

app.listen(3000, ()=>{
  console.log('Servidor corriendo')
});

//Especificando el siste de rooteo de express
app.get('/', function(req, res){
  res.send('Bienvenidos al sitio');
})