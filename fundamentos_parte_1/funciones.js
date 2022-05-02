// funciones y los distintos tipos

// creando una función
//function declaration
// Nota no importa si llamo antes o despues la función igualmente va a funcionar
// Js mapea las funciones antes para luego ejecutarlas
function saludar_con( nombre ){
    console.log('Bienvenido ' + nombre)
}
function saludar(  ){
    console.log('Bienvenido sin parametro')
}

saludar_con('Daniela')
saludar()

// Mejoras de JS
// function expression
// aqui si me importa el orden de declaración normal de toda la vida
const cliente = function(nombreCliente){
    console.log(`Mostrando los datos del cliente ${nombreCliente}`)
}

cliente('Marvin')


