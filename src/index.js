const express = require('express');
const dotenv = require("dotenv").config();
const router = require('./router/Router');
const bp = require('body-parser')
const db = require('./databases')
const path = require('path')
//Apliclacion del servidor
const app = express();
console.log(process.env.MONGODB_URI)
//Setting 
app.set('port', '3000');
app.set('views' , path.join(__dirname, 'views'))
app.set('partials' , path.join(__dirname, 'views/partials'))
app.set('view engine' , 'ejs');

//Middleware
//Esto arregla undefined 
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use(router);
//Definir carpet public contendra css,js,html 
app.use(express.static(path.join(__dirname, 'public')));


//Server
app.listen(app.get('port'), () => {
    console.log('Servidor levantado' , app.get('port'))
    
    })
