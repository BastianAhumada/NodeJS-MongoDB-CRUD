
var myModal = new bootstrap.Modal(document.getElementById('modalalumnos'))
var nombreAlumno = document.getElementById('nombreAlumno')
var edadAlumno = document.getElementById('edadAlumno')

const on = (element,event,selector, handler)=> {
    console.log("entraste")
    
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e);
        }

    })
}
on(document,'click', '.btnEditar', e => {
 const fila = e.target.parentNode.parentNode
 id_editar.value = fila.children[0].innerHTML
 nombreAlumno.value = fila.children[1].innerHTML
 edadAlumno.value= fila.children[2].innerHTML
 myModal.show()

})
