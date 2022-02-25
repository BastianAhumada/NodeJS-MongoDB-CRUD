const { default: mongoose } = require('mongoose');

const schemamodel = require('mongoose').Schema;
//Modelo instancia un nuevo schema 
const alumnosSchema = new schemamodel({
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    edad: {
        type: Number,
        required: true
    },
     versionKey: false })
const Person = mongoose.model('alumnos' , alumnosSchema)
module.exports = Person
