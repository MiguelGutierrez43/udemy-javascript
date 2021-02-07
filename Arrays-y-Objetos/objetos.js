var user = "Miguel Gutierrez"
var persona = {
    nombre : "Juanito",
    sexo : "Masculino"
}

var miObjeto = {

    //clave : valor

    nombre : "Miguel",
    edad : 22,
    importante : true,
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : persona,
    fecha : new Date
}

var {nombre} = miObjeto // destructuracion de un objeto

var otraFuncion = ({texto},{otroObjeto}) => {

    console.log(otroObjeto.sexo)
    console.log(texto)
}


otraFuncion(miObjeto,miObjeto)