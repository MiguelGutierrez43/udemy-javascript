// var: variables locales
var saludo = 'Hola Miguel'
if (saludo) {

    var saludo = 'Hola'
    console.log(saludo)
}
console.log(saludo)

// let: variables limitadas al alcance del bloque donde las definimos
let nombre = 'Miguel'
if (nombre) {

    let nombre = 'Claudia'
    console.log(nombre)
    
}
console.log(nombre)

// const: son variables inmutables
const PI = 3.14
console.log(PI)