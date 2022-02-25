const mongoose = require('mongoose');
const dotenv = require('dotenv')
//Varible de entoro asignada
const mongodb_uri = process.env.MONGODB_URI;
mongoose.connect(mongodb_uri, {
    useUnifiedTopology :true,
    useNewUrlParser: true
})
//Conectar a la base de datos mongodb
const database = mongoose.connection
database.on('error', console.error.bind(console, 'ERROR'))
database.once('open', function callback(){
    console.log("Connectada")
} )
module.exports = database