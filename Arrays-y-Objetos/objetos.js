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
    otroObjeto : persona
}

console.log(miObjeto.otroObjeto.sexo)