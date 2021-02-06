var acceso = true

/*var accesoU = function (a) {
    return a
}*/

//var accesoU = a => a // Retorna un solo valor

//var accesoU = () => false // No pasamos parametros a nuestra funcion y retornamos un valor

//var accesoU = (a,n) => console.log(`Usuario ${n} Acceso ${a}`) // Cuando pasamos mas de un parametro
//accesoU(acceso, "Miguel")

var accesoU = (a,nombre) => {
    console.log(`Usuario ${nombre} en ejecución`)
    return true
}

accesoU(acceso, "Miguel") == true
? console.log("Acceso Permitido")
: console.log("Acesoo Denegado")
