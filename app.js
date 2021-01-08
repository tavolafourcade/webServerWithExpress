let express = require('express');

const app = express();
const path = require('path');

//console.log(app)

app.listen(3000, ()=>{
  console.log('Servidor corriendo')
});

//Especificando el sistema de rooteo de express
// app.get('/', function(req, res){
//   res.send('Bienvenidos al sitio');
// })

// app.get('/', function(){

// })
app.get('/contact', function(req,res){
  res.send('Welcome to the contact section');
})

app.get('/un-array', function(req, res){
  res.send([1,2,3,4])
})

app.get('/un-objeto', function(req,res){
  res.send({name:'Octavio'})
})

app.get('/', (req, res)=>{
  //resolve da una ruta absoluta.
  let htmlPath= path.resolve(__dirname, './views/index.html');
  //console.log(htmlPath)
  res.sendFile(htmlPath)
})