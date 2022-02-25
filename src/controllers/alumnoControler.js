const { redirect } = require('express/lib/response')
const modeloalumno = require('../models/Alumno')
//Mostrar
module.exports.mostrar = (req, res) => {
    //Metodo .find trae todos los documentos de la coleccion
    modeloalumno.find({}, (error, modeloalumno) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar'

            })
        }
        // console.log(modeloalumno)
        return res.render("index.ejs", { alumnos: modeloalumno })

    })
}

//Crear
module.exports.crear = (req, res) => {
    console.log(req.body.txtnombre)
    console.log(req.body.txtnota)
    const alumno = new modeloalumno({
        nombre: req.body.txtnombre,
        edad: req.body.txtnota
    })
    //Guardar los datos en mongodb
    alumno.save(function (error, alumno) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear alumno'
            })
        }
        res.redirect('/')
    })

}
//Editar
module.exports.editar = (req, res) => {
    const id = req.body.ideditar
    const nombre = req.body.nombreAlumno
    const edad = req.body.edadAlumno
    console.log(modeloalumno)
    console.log(edad)
    // console.log(nombrealumno)
    // console.log(edadalumno)
    //Buscar solo un dato 
    modeloalumno.findOneAndUpdate(id, { nombre, edad }, (error, alumnos) => {
        if (error) {
            return res.status(500).json({
                message: error
            })
        }

        res.redirect('/')


    })
}
module.exports.borrar = (req,res) => {
//Pasar como parametro 
const id = req.params.ideditar
modeloalumno.findOneAndDelete(id, (error, alumnos) => {
 if(error){
     res.status(500).json ({
         message: 'Error al eliminar'
     })
 }
 res.redirect('/')

})

}