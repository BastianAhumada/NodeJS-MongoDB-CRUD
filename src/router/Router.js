const express = require('express');
const app = express();
const router = express.Router();
const alumnocontroller = require('../controllers/alumnoControler')


//Mostrar Alumnos
router.get('/' , alumnocontroller.mostrar , (req,res) => {
    res.send("HOLA")
    res.render("index.ejs");
})  
//Crear Alumnos
router.post('/crear', alumnocontroller.crear)
router.get('/about' , (req,res) => {
    res.render("about.ejs")
})
//EditarAlumno 
router.post('/editar', alumnocontroller.editar , () => {
    console.log("Entrando a editar")
})
//EliminarAlumno
router.get('/borrar/:id',alumnocontroller.borrar, () => {
    console.log("Eliminado con exito")
})
router.post("/Task/add", (req,res) => {
    console.log(req.body)
    res.send( req.body)

})
module.exports = router;
